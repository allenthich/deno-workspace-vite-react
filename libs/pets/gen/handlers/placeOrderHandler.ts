import type { PlaceOrderMutationResponse } from "../types/PlaceOrder.ts";
import { http } from "msw";

 export function placeOrderHandler(data?: PlaceOrderMutationResponse) {
    return http.post("*/store/order", function handler(info) {
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    });
}