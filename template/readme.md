# MCP Server Tools CLI

[English](readme.md) | [中文](readme_zh.md)

A command-line tool for managing MCP server tools and services.

## Usage

### Publish MCP Service

To publish your MCP service:

1. Make sure you're in your project directory
2. Run the following command:

```bash
npx mcp-cli-server-tools upload
```

This command will:

1. If successful, send an install request to the MCP server
2. Show the installation status

### Create New Tool

To create a new tool from template:

```bash
npx mcp-cli-server-tools create [directory]
```

If no directory is specified, it will use the current directory.
