import type { UpdateUserPathParams, UpdateUserError, UpdateUserMutationRequest, UpdateUserMutationResponse } from "../../types/UpdateUser.ts";
import { userSchema } from "../userSchema.ts";
import { z } from "zod";

 export const updateUserPathParamsSchema = z.object({ "username": z.string().describe("name that need to be deleted") }) as z.ZodType<UpdateUserPathParams>;

 /**
 * @description successful operation
 */
export const updateUserErrorSchema = z.unknown() as z.ZodType<UpdateUserError>;

 /**
 * @description Update an existent user in the store
 */
export const updateUserMutationRequestSchema = z.lazy(() => userSchema) as z.ZodType<UpdateUserMutationRequest>;

 export const updateUserMutationResponseSchema = z.unknown() as z.ZodType<UpdateUserMutationResponse>;