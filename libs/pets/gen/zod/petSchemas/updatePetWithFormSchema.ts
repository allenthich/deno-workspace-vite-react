import type { UpdatePetWithFormPathParams, UpdatePetWithFormQueryParams, UpdatePetWithForm405, UpdatePetWithFormMutationResponse } from "../../types/UpdatePetWithForm.ts";
import { z } from "zod";

 export const updatePetWithFormPathParamsSchema = z.object({ "petId": z.number().int().describe("ID of pet that needs to be updated") }) as z.ZodType<UpdatePetWithFormPathParams>;

 export const updatePetWithFormQueryParamsSchema = z.object({ "name": z.string().describe("Name of pet that needs to be updated").optional(), "status": z.string().describe("Status of pet that needs to be updated").optional() }).optional() as z.ZodType<UpdatePetWithFormQueryParams>;

 /**
 * @description Invalid input
 */
export const updatePetWithForm405Schema = z.unknown() as z.ZodType<UpdatePetWithForm405>;

 export const updatePetWithFormMutationResponseSchema = z.unknown() as z.ZodType<UpdatePetWithFormMutationResponse>;