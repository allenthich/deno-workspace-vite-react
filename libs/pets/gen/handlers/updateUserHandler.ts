import type { UpdateUserMutationResponse } from "../types/UpdateUser.ts";
import { http } from "msw";

 export function updateUserHandler(data?: UpdateUserMutationResponse) {
    return http.put("*/user/:username", function handler(info) {
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    });
}