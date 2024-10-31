import type { LogoutUserQueryResponse } from "../types/LogoutUser.ts";
import { http } from "msw";

 export function logoutUserHandler(data?: LogoutUserQueryResponse) {
    return http.get("*/user/logout", function handler(info) {
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    });
}