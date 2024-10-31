import type { AddPetMutationResponse } from "../types/AddPet.ts";
import { http } from "msw";

 export function addPetHandler(data?: AddPetMutationResponse) {
    return http.post("*/pet", function handler(info) {
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    });
}