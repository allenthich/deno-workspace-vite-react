import type { AddPetRequest } from "../types/AddPetRequest.ts";
import { categorySchema } from "./categorySchema.ts";
import { tagSchema } from "./tagSchema.ts";
import { z } from "zod";

 export const addPetRequestSchema = z.object({ "id": z.number().int().optional(), "name": z.string(), "category": z.lazy(() => categorySchema).optional(), "photoUrls": z.array(z.string()), "tags": z.array(z.lazy(() => tagSchema)).optional(), "status": z.enum(["available", "pending", "sold"]).describe("pet status in the store").optional() }) as z.ZodType<AddPetRequest>;