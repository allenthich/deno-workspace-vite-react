import type { DeleteOrderPathParams, DeleteOrder400, DeleteOrder404, DeleteOrderMutationResponse } from "../../types/DeleteOrder.ts";
import { z } from "zod";

 export const deleteOrderPathParamsSchema = z.object({ "orderId": z.number().int().describe("ID of the order that needs to be deleted") }) as z.ZodType<DeleteOrderPathParams>;

 /**
 * @description Invalid ID supplied
 */
export const deleteOrder400Schema = z.unknown() as z.ZodType<DeleteOrder400>;

 /**
 * @description Order not found
 */
export const deleteOrder404Schema = z.unknown() as z.ZodType<DeleteOrder404>;

 export const deleteOrderMutationResponseSchema = z.unknown() as z.ZodType<DeleteOrderMutationResponse>;