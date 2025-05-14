# mcp-cli-server-tools

简体中文 | [English](./README.md)

用于生成服务器工具的命令行工具。

## 使用方法

### 创建新项目

```bash
npx mcp-cli-server-tools create [directory]
```

示例：

```bash
npx mcp-cli-server-tools create my-tools
```

### 上传包

```bash
npx mcp-cli-server-tools upload
```

## 模板结构

生成的项目包含以下基本服务器工具设置：

```
[directory]
├── package.json        # 项目配置和依赖
├── tsconfig.json      # TypeScript 配置
├── readme.md          # 项目文档
└── src/              # 源代码目录
```

### 主要特性

- 开箱即用的 TypeScript 支持
- 现代 ES 模块设置 (`"type": "module"`)
- 内置开发脚本：
  - `npm start`: 启动开发模式（带有监视功能）
  - `npm run build`: 构建项目

### 依赖项

模板包含以下主要依赖：

#### 对等依赖

- `@modelcontextprotocol/sdk`: ^1.10.1
- `zod`: ^3.24.3

#### 开发依赖

- `typescript`: ^5.8.3
- `tsx`: ^4.19.3
- `@types/node`: ^22.14.1

## 开发

要为此项目做贡献：

1. 克隆仓库
2. 使用 `npm install` 安装依赖
3. 进行修改
4. 测试你的修改
5. 提交拉取请求

## 许可证

MIT
