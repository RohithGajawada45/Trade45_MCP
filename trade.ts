require('dotenv').config();

import { KiteConnect } from "kiteconnect";

const apiSecret = process.env.apiSecret;
const apiKey = process.env.apiKey;
let acc_tokens = process.env.acc_tokens;

if (!apiKey || !apiSecret || !acc_tokens) {
  throw new Error("Missing required environment variables.");
}

//const requestToken = "UAVzDfZIm2hz7c6wpV37iyTepBKZkGaQ";

const kc = new KiteConnect({ api_key: apiKey });
kc.setAccessToken(acc_tokens);

//console.log(kc.getLoginURL());

// async function generateSession(token: string) {
//   try {
//     if (!apiSecret) {
//       throw new Error("API Secret is not defined");
//     }
//     const response = await kc.generateSession(token, apiSecret);
//     console.log(response.access_token);
//     console.log("Session generated:", response);
//     return response;
//   } catch (err) {
//     console.error("Error generating session:", err);
//     throw err;
//   }
// }

// generateSession(requestToken);


export async function placeOrder(tradingsymbol: string, quantity: number, type: "BUY" | "SELL") {
  try {
    console.log(`Placing ${type} order for ${quantity} shares of ${tradingsymbol}...`);
    const order = await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol,
      quantity,
      transaction_type: type,
      product: "CNC",
      order_type: "MARKET",
    });
    console.log('Order placed successfully:', order);
    return order;
  } catch (err) {
    console.error('Error placing order:', err);
    throw err;
  }
}
//placeOrder("GOLDBEES", 1, "BUY");