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
        console.log(`Attempting to buy ${qty} shares of ${stockSymbol}...`);
        try {
            await placeOrder(stockSymbol, qty, "BUY");
            console.log('Order placed successfully');
            return {
                content: [{ type: "text", text: `Successfully placed buy order for ${qty} shares of ${stockSymbol}` }]
            }
        } catch (error) {
            console.error('Error placing order:', error);
            throw error;
        }
    }
);

server.tool("Sell-Stock",
    { stockSymbol: z.string(), qty: z.number() },
    async ({ stockSymbol, qty }) => {
        await placeOrder(stockSymbol, qty, "SELL");
        return {
            content: [{ type: "text", text: "SELL Order placed successfully" }]
        }
    }
);

// Start the server with stdio transport
const transport = new StdioServerTransport();
await server.connect(transport);
