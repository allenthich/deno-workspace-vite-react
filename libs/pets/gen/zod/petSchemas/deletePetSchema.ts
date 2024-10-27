import type { DeletePetPathParams, DeletePetHeaderParams, DeletePet400, DeletePetMutationResponse } from "../../types/DeletePet.ts";
import { z } from "zod";

 export const deletePetPathParamsSchema = z.object({ "petId": z.number().int().describe("Pet id to delete") }) as z.ZodType<DeletePetPathParams>;

 export const deletePetHeaderParamsSchema = z.object({ "api_key": z.string().optional() }).optional() as z.ZodType<DeletePetHeaderParams>;

 /**
 * @description Invalid pet value
 */
export const deletePet400Schema = z.unknown() as z.ZodType<DeletePet400>;

 export const deletePetMutationResponseSchema = z.unknown() as z.ZodType<DeletePetMutationResponse>;