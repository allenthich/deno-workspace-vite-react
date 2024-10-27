import type { AddPet200, AddPet405, AddPetMutationRequest, AddPetMutationResponse } from "../../types/AddPet.ts";
import { addPetRequestSchema } from "../addPetRequestSchema.ts";
import { petSchema } from "../petSchema.ts";
import { z } from "zod";

 /**
 * @description Successful operation
 */
export const addPet200Schema = z.lazy(() => petSchema) as z.ZodType<AddPet200>;

 /**
 * @description Pet not found
 */
export const addPet405Schema = z.object({ "code": z.number().int().optional(), "message": z.string().optional() }) as z.ZodType<AddPet405>;

 /**
 * @description Create a new pet in the store
 */
export const addPetMutationRequestSchema = z.lazy(() => addPetRequestSchema) as z.ZodType<AddPetMutationRequest>;

 export const addPetMutationResponseSchema = z.lazy(() => addPet200Schema) as z.ZodType<AddPetMutationResponse>;