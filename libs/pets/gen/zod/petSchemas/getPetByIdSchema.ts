import type { GetPetByIdPathParams, GetPetById200, GetPetById400, GetPetById404, GetPetByIdQueryResponse } from "../../types/GetPetById.ts";
import { petSchema } from "../petSchema.ts";
import { z } from "zod";

 export const getPetByIdPathParamsSchema = z.object({ "petId": z.number().int().describe("ID of pet to return") }) as z.ZodType<GetPetByIdPathParams>;

 /**
 * @description successful operation
 */
export const getPetById200Schema = z.lazy(() => petSchema) as z.ZodType<GetPetById200>;

 /**
 * @description Invalid ID supplied
 */
export const getPetById400Schema = z.unknown() as z.ZodType<GetPetById400>;

 /**
 * @description Pet not found
 */
export const getPetById404Schema = z.unknown() as z.ZodType<GetPetById404>;

 export const getPetByIdQueryResponseSchema = z.lazy(() => getPetById200Schema) as z.ZodType<GetPetByIdQueryResponse>;