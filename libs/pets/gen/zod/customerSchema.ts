import type { Customer } from "../types/Customer.ts";
import { addressSchema } from "./addressSchema.ts";
import { z } from "zod";

 export const customerSchema = z.object({ "id": z.number().int().optional(), "username": z.string().optional(), "address": z.array(z.lazy(() => addressSchema)).optional() }) as z.ZodType<Customer>;