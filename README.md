# mcp-cli-server-tools

[简体中文](./README_zh.md) | English

A CLI tool for generating server tools from templates.

## Usage

### Create new project

```bash
npx mcp-cli-server-tools create [directory]
```

Example:

```bash
npx mcp-cli-server-tools create my-tools
```

### Upload package

```bash
npx mcp-cli-server-tools upload
```

## Template Structure

The generated project includes a basic server tools setup with the following structure:

```
[directory]
├── package.json        # Project configuration and dependencies
├── tsconfig.json      # TypeScript configuration
├── readme.md          # Project documentation
└── src/              # Source code directory
```

### Key Features

- TypeScript support out of the box
- Modern ES Modules setup (`"type": "module"`)
- Built-in development scripts:
  - `npm start`: Start development mode with watch
  - `npm run build`: Build the project

### Dependencies

The template comes with the following key dependencies:

#### Peer Dependencies

- `@modelcontextprotocol/sdk`: ^1.10.1
- `zod`: ^3.24.3

#### Dev Dependencies

- `typescript`: ^5.8.3
- `tsx`: ^4.19.3
- `@types/node`: ^22.14.1

## Development

To contribute to this project:

1. Clone the repository
2. Install dependencies with `npm install`
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

MIT
