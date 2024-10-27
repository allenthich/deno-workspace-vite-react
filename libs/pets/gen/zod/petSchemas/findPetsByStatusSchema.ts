import type { FindPetsByStatusQueryParams, FindPetsByStatus200, FindPetsByStatus400, FindPetsByStatusQueryResponse } from "../../types/FindPetsByStatus.ts";
import { petSchema } from "../petSchema.ts";
import { z } from "zod";

 export const findPetsByStatusQueryParamsSchema = z.object({ "status": z.enum(["available", "pending", "sold"]).default("available").describe("Status values that need to be considered for filter") }).optional() as z.ZodType<FindPetsByStatusQueryParams>;

 /**
 * @description successful operation
 */
export const findPetsByStatus200Schema = z.array(z.lazy(() => petSchema)) as z.ZodType<FindPetsByStatus200>;

 /**
 * @description Invalid status value
 */
export const findPetsByStatus400Schema = z.unknown() as z.ZodType<FindPetsByStatus400>;

 export const findPetsByStatusQueryResponseSchema = z.lazy(() => findPetsByStatus200Schema) as z.ZodType<FindPetsByStatusQueryResponse>;