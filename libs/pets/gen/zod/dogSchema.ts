import type { Dog } from "../types/Dog.ts";
import { z } from "zod";

 export const dogSchema = z.object({ "type": z.enum(["dog"]), "bark": z.string().optional() }) as z.ZodType<Dog>;