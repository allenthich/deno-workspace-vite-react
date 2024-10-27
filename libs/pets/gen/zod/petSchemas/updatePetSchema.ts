import type { UpdatePet200, UpdatePet400, UpdatePet404, UpdatePet405, UpdatePetMutationRequest, UpdatePetMutationResponse } from "../../types/UpdatePet.ts";
import { petSchema } from "../petSchema.ts";
import { z } from "zod";

 /**
 * @description Successful operation
 */
export const updatePet200Schema = z.lazy(() => petSchema) as z.ZodType<UpdatePet200>;

 /**
 * @description Invalid ID supplied
 */
export const updatePet400Schema = z.unknown() as z.ZodType<UpdatePet400>;

 /**
 * @description Pet not found
 */
export const updatePet404Schema = z.unknown() as z.ZodType<UpdatePet404>;

 /**
 * @description Validation exception
 */
export const updatePet405Schema = z.unknown() as z.ZodType<UpdatePet405>;

 /**
 * @description Update an existent pet in the store
 */
export const updatePetMutationRequestSchema = z.lazy(() => petSchema).and(z.object({ type: z.never() })) as z.ZodType<UpdatePetMutationRequest>;

 export const updatePetMutationResponseSchema = z.lazy(() => updatePet200Schema) as z.ZodType<UpdatePetMutationResponse>;