import type { CreateUserMutationResponse } from "../types/CreateUser.ts";
import { http } from "msw";

 export function createUserHandler(data?: CreateUserMutationResponse) {
    return http.post("*/user", function handler(info) {
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    });
}