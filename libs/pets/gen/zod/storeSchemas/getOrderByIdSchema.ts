import type { GetOrderByIdPathParams, GetOrderById200, GetOrderById400, GetOrderById404, GetOrderByIdQueryResponse } from "../../types/GetOrderById.ts";
import { orderSchema } from "../orderSchema.ts";
import { z } from "zod";

 export const getOrderByIdPathParamsSchema = z.object({ "orderId": z.number().int().describe("ID of order that needs to be fetched") }) as z.ZodType<GetOrderByIdPathParams>;

 /**
 * @description successful operation
 */
export const getOrderById200Schema = z.lazy(() => orderSchema) as z.ZodType<GetOrderById200>;

 /**
 * @description Invalid ID supplied
 */
export const getOrderById400Schema = z.unknown() as z.ZodType<GetOrderById400>;

 /**
 * @description Order not found
 */
export const getOrderById404Schema = z.unknown() as z.ZodType<GetOrderById404>;

 export const getOrderByIdQueryResponseSchema = z.lazy(() => getOrderById200Schema) as z.ZodType<GetOrderByIdQueryResponse>;