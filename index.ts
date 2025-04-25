import { placeOrder } from "./trade";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});

// Add an addition tool
server.tool("add",
  { a: z.number(), b: z.number() },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
  })
);

server.tool("factorial",
    { a: z.number() },
    async ({ a }) => {
        let fact = 1;
        for (let i = 2; i <= a; i++) {
            fact *= i;
        }
        return {
            content: [{ type: "text", text: String(fact) }]
        }
    }
);

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
  
