import type { Category } from "../types/Category.ts";
import { z } from "zod";

 export const categorySchema = z.object({ "id": z.number().int().optional(), "name": z.string().optional() }) as z.ZodType<Category>;