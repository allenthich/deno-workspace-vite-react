import type { Pet } from "../types/Pet.ts";
import { categorySchema } from "./categorySchema.ts";
import { catSchema } from "./catSchema.ts";
import { dogSchema } from "./dogSchema.ts";
import { tagSchema } from "./tagSchema.ts";
import { z } from "zod";

 export const petSchema = z.union([z.lazy(() => dogSchema).and(z.object({ "id": z.number().int().optional(), "type": z.enum(["dog", "cat"]).optional(), "name": z.string(), "category": z.lazy(() => categorySchema).optional(), "photoUrls": z.array(z.string()), "tags": z.array(z.lazy(() => tagSchema)).optional(), "status": z.enum(["available", "pending", "sold"]).describe("pet status in the store").optional() })), z.lazy(() => catSchema).and(z.object({ "id": z.number().int().optional(), "type": z.enum(["dog", "cat"]).optional(), "name": z.string(), "category": z.lazy(() => categorySchema).optional(), "photoUrls": z.array(z.string()), "tags": z.array(z.lazy(() => tagSchema)).optional(), "status": z.enum(["available", "pending", "sold"]).describe("pet status in the store").optional() }))]) as z.ZodType<Pet>;