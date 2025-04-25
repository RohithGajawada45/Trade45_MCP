# Trade45 🚀

[![Bun](https://img.shields.io/badge/Bun-Runtime-black)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![KiteConnect](https://img.shields.io/badge/KiteConnect-v5.0.1-orange)](https://kite.trade)
[![MCP](https://img.shields.io/badge/MCP-v1.10.2-purple)](https://modelcontextprotocol.ai)

A TypeScript-based Model Context Protocol (MCP) server that integrates with KiteConnect API for automated stock trading. Built with Bun runtime for high performance.

## 🌟 Features

- 📈 Real-time stock trading via KiteConnect API
- 🤖 MCP server with standardized tool interfaces
- 💹 Market and limit order support
- 🔐 Secure environment-based configuration

## 🔧 Prerequisites

- [Bun](https://bun.sh) runtime installed
- KiteConnect API credentials
- TypeScript knowledge

## 🚀 Quick Start

1. **Setup Project:**
   ```bash
   git clone https://github.com/RohithGajawada/trade45.git
   cd trade45
   bun install
   ```

2. **Configure Environment:**
   Create a `.env` file in the project root:
   ```env
   apiKey=YOUR_KITE_API_KEY
   apiSecret=YOUR_KITE_API_SECRET
   acc_tokens=YOUR_KITE_ACCESS_TOKEN
   ```

3. **Start Server:**
   ```bash
   bun run index.ts
   ```

## 🛠️ Project Structure

```
trade45/
├── index.ts        # MCP server setup and tool definitions
├── trade.ts        # KiteConnect integration and order logic
├── tsconfig.json   # TypeScript configuration
├── package.json    # Project dependencies
└── .env           # Environment configuration
```

## 💻 Available Tools

### Trading Tools

1. **Buy-Stock**
   ```typescript
   {
     stockSymbol: string,
     qty: number
   }
   ```

2. **Sell-Stock**
   ```typescript
   {
     stockSymbol: string,
     qty: number
   }
   ```


## 🔒 Security

- Store sensitive credentials in `.env`
- Add `.env` to `.gitignore`
- Regularly rotate KiteConnect access tokens
- Validate all inputs using Zod schemas

## 🔄 Implementation Details

- Uses `@modelcontextprotocol/sdk` for MCP server implementation
- Implements `StdioServerTransport` for communication
- Leverages KiteConnect's Node.js SDK for trading operations
- Type-safe implementation using TypeScript and Zod

## 🔌 Claude Desktop Integration

To add this MCP server to Claude Desktop:

1. **Open Claude Desktop Settings:**
   - Click on Settings (⚙️) icon
   - Navigate to "Model Context Protocol" section

2. **Add New MCP Configuration:**
   ```json
   {
     "name": "Trade45",
     "command": "bun run index.ts",
     "workingDirectory": "path/to/trade45"
   }
   ```
   Replace `path/to/trade45` with the absolute path to your trade45 directory.

3. **Save and Restart:**
   - Click "Save" to apply changes
   - Restart Claude Desktop
   - The trading tools will now be available in your Claude conversations

## ⚠️ Disclaimer

This software is for educational purposes only. Trading in financial markets carries risk. Always verify trading logic and use appropriate risk management.

---

<div align="center">
Made with ❤️ by Rohith Gajawada, for developers
</div>
