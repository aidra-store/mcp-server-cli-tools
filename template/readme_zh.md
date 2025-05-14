# MCP 服务器工具 CLI

[English](readme.md) | [中文](readme_zh.md)

用于管理 MCP 服务器工具和服务的命令行工具。

## 使用方法

### 发布 MCP 服务

要发布您的 MCP 服务：

1. 确保您在项目目录中
2. 运行以下命令：

```bash
npx mcp-cli-server-tools upload
```

此命令将：

1. 如果成功，向 MCP 服务器发送安装请求
2. 显示安装状态

### 创建新工具

要从模板创建新工具：

```bash
npx mcp-cli-server-tools create [目录名]
```

如果未指定目录，将使用当前目录。
