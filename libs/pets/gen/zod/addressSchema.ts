import type { Address } from "../types/Address.ts";
import { z } from "zod";

 export const addressSchema = z.object({ "street": z.string().optional(), "city": z.string().optional(), "state": z.string().optional(), "zip": z.string().optional() }) as z.ZodType<Address>;