require('dotenv').config();

import { KiteConnect } from "kiteconnect";

const apiSecret = process.env.apiSecret;
const apiKey = process.env.apiKey;
let acc_tokens = process.env.acc_tokens;

if (!apiKey || !apiSecret || !acc_tokens) {
  throw new Error("Missing required environment variables.");
}


const kc = new KiteConnect({ api_key: apiKey });
kc.setAccessToken(acc_tokens);

// console.log(kc.getLoginURL());

export async function placeOrder(tradingsymbol: string, quantity: number, type: "BUY" | "SELL") {
  try {
     await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol,
      quantity,
      transaction_type: type,
      product: "MIS",
      order_type: "MARKET",
    });
  } catch (err) {
    console.error(err);
  }
}