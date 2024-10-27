import type { FindPetsByTagsQueryParams, FindPetsByTags200, FindPetsByTags400, FindPetsByTagsQueryResponse } from "../../types/FindPetsByTags.ts";
import { petSchema } from "../petSchema.ts";
import { z } from "zod";

 export const findPetsByTagsQueryParamsSchema = z.object({ "tags": z.array(z.string()).describe("Tags to filter by").optional(), "page": z.string().describe("to request with required page number or pagination").optional(), "pageSize": z.string().describe("to request with required page size").optional() }).optional() as z.ZodType<FindPetsByTagsQueryParams>;

 /**
 * @description successful operation
 */
export const findPetsByTags200Schema = z.array(z.lazy(() => petSchema)) as z.ZodType<FindPetsByTags200>;

 /**
 * @description Invalid tag value
 */
export const findPetsByTags400Schema = z.unknown() as z.ZodType<FindPetsByTags400>;

 export const findPetsByTagsQueryResponseSchema = z.lazy(() => findPetsByTags200Schema) as z.ZodType<FindPetsByTagsQueryResponse>;