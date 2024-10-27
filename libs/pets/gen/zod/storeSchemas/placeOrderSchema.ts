import type { PlaceOrder200, PlaceOrder405, PlaceOrderMutationRequest, PlaceOrderMutationResponse } from "../../types/PlaceOrder.ts";
import { orderSchema } from "../orderSchema.ts";
import { z } from "zod";

 /**
 * @description successful operation
 */
export const placeOrder200Schema = z.lazy(() => orderSchema) as z.ZodType<PlaceOrder200>;

 /**
 * @description Invalid input
 */
export const placeOrder405Schema = z.unknown() as z.ZodType<PlaceOrder405>;

 export const placeOrderMutationRequestSchema = z.lazy(() => orderSchema) as z.ZodType<PlaceOrderMutationRequest>;

 export const placeOrderMutationResponseSchema = z.lazy(() => placeOrder200Schema) as z.ZodType<PlaceOrderMutationResponse>;