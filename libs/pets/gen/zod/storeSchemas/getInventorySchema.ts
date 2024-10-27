import type { GetInventory200, GetInventoryQueryResponse } from "../../types/GetInventory.ts";
import { z } from "zod";

 /**
 * @description successful operation
 */
export const getInventory200Schema = z.object({}).catchall(z.number().int()) as z.ZodType<GetInventory200>;

 export const getInventoryQueryResponseSchema = z.lazy(() => getInventory200Schema) as z.ZodType<GetInventoryQueryResponse>;