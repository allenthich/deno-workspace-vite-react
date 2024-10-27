import type { PlaceOrderPatch200, PlaceOrderPatch405, PlaceOrderPatchMutationRequest, PlaceOrderPatchMutationResponse } from "../../types/PlaceOrderPatch.ts";
import { orderSchema } from "../orderSchema.ts";
import { z } from "zod";

 /**
 * @description successful operation
 */
export const placeOrderPatch200Schema = z.lazy(() => orderSchema) as z.ZodType<PlaceOrderPatch200>;

 /**
 * @description Invalid input
 */
export const placeOrderPatch405Schema = z.unknown() as z.ZodType<PlaceOrderPatch405>;

 export const placeOrderPatchMutationRequestSchema = z.lazy(() => orderSchema) as z.ZodType<PlaceOrderPatchMutationRequest>;

 export const placeOrderPatchMutationResponseSchema = z.lazy(() => placeOrderPatch200Schema) as z.ZodType<PlaceOrderPatchMutationResponse>;