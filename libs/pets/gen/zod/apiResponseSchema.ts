import type { ApiResponse } from "../types/ApiResponse.ts";
import { z } from "zod";

 export const apiResponseSchema = z.object({ "code": z.number().int().optional(), "type": z.string().optional(), "message": z.string().optional() }) as z.ZodType<ApiResponse>;