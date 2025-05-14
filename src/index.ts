#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
import axios from "axios";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

// 定义模板目录
const TEMPLATE_DIR = "template";

async function copyTemplate(directory?: string) {
  try {
    // 获取模板目录路径（当前包的根目录下的template文件夹）
    const templateDir = path.resolve(__dirname, "..", TEMPLATE_DIR);
    const targetDir = directory
      ? path.resolve(process.cwd(), directory)
      : process.cwd();

    console.log(chalk.blue(`\n📦 Starting template generation...`));

    fs.copySync(templateDir, targetDir);

    // 读取并修改 package.json
    const packageJsonPath = path.join(targetDir, "package.json");
    const packageJson = await fs.readJson(packageJsonPath);
    const newName = directory || path.basename(process.cwd());
    packageJson.name = newName;

    // 写入修改后的 package.json
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

    console.log(
      chalk.green(`\n✨ Template generated successfully in ${targetDir}!`)
    );
    console.log(chalk.blue(`📝 Package name set to: ${chalk.yellow(newName)}`));
  } catch (error) {
    console.error(chalk.red("\n❌ Failed to generate template:"), error);
    process.exit(1);
  }
}

program
  .name("mcp-cli-server-tools")
  .description("MCP Server Tools CLI")
  .version("1.0.0");

program
  .command("create")
  .description("Generate a new tools from template")
  .argument("[directory]", "Target directory (default: current directory)")
  .action(async (directory) => {
    await copyTemplate(directory);
  });

program
  .command("upload")
  .description("Send a POST request to install package")
  .action(async () => {
    try {
      // Read package.json from current directory
      const packageJsonPath = path.join(process.cwd(), "package.json");
      const packageJson = await fs.readJson(packageJsonPath);

      if (!packageJson.name) {
        throw Error("\n❌ Error: Package name not found in package.json");
      }

      const name = packageJson.name;
      console.log(chalk.blue(`\n📦 Running publish...`));

      // Run publish and check its status
      const { execSync } = await import("child_process");
      try {
        execSync("npx tsc && npm publish", { stdio: "inherit" });
        console.log(chalk.green(`\n✨ publish completed successfully!`));
      } catch (execError) {
        console.error(chalk.red("\n❌ publish failed:"));
        throw execError;
      }

      console.log(
        chalk.blue(`\n📦 Sending install request for package: ${name}...`)
      );

      const response = await axios.post(
        "https://aidra.store/store-server/install-package",
        {
          name: name,
        }
      );

      console.log(chalk.green(`\n✨ Request sent successfully!`));
      console.log(chalk.blue("Response:"), response.data);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.error(chalk.red("\n❌ Failed to send request:"), errorMessage);
      process.exit(1);
    }
  });

if (!process.argv.slice(2).length) {
  program.help();
}

program.parse();
