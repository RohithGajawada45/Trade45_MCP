import { placeOrder } from "./trade";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});

server.tool("Buy-Stock",
    { stockSymbol: z.string(), qty: z.number() },
    async ({ stockSymbol, qty }) => {
        placeOrder(stockSymbol, qty, "BUY");
        return {
            content: [{ type: "text", text: "Order placed successfully" }]
        }
    }
);


server.tool("Sell-Stock",
    { stockSymbol: z.string(), qty: z.number() },
    async ({ stockSymbol, qty }) => {
        placeOrder(stockSymbol, qty, "SELL");
        return {
            content: [{ type: "text", text: "SELL Order placed successfully" }]
        }
    }
);


const transport = new StdioServerTransport();
await server.connect(transport);
  
