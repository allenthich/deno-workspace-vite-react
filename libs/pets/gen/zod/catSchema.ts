import type { Cat } from "../types/Cat.ts";
import { z } from "zod";

 export const catSchema = z.object({ "type": z.enum(["cat"]), "name": z.string().optional() }) as z.ZodType<Cat>;