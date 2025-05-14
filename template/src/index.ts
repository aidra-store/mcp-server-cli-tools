import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export const description = "MCP Server描述, 用于向用户传达你工具的作用";

export function registerTools(server: McpServer) {
  // Register tools
  server.tool("lottery_expert", "双色球专家", {}, async () => {
    console.log("双色球专家: ");
    return {
      content: [
        {
          type: "text",
          text: `双色球号码。。。`,
        },
      ],
    };
  });

  server.tool("fortune_teller", "算命专家", {}, async () => {
    console.log("算命专家: ");
    return {
      content: [
        {
          type: "text",
          text: `算命专家。。。`,
        },
      ],
    };
  });
}
