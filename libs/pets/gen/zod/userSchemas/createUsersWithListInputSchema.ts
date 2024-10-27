import type { CreateUsersWithListInput200, CreateUsersWithListInputError, CreateUsersWithListInputMutationRequest, CreateUsersWithListInputMutationResponse } from "../../types/CreateUsersWithListInput.ts";
import { userSchema } from "../userSchema.ts";
import { z } from "zod";

 /**
 * @description Successful operation
 */
export const createUsersWithListInput200Schema = z.lazy(() => userSchema) as z.ZodType<CreateUsersWithListInput200>;

 /**
 * @description successful operation
 */
export const createUsersWithListInputErrorSchema = z.unknown() as z.ZodType<CreateUsersWithListInputError>;

 export const createUsersWithListInputMutationRequestSchema = z.array(z.lazy(() => userSchema)) as z.ZodType<CreateUsersWithListInputMutationRequest>;

 export const createUsersWithListInputMutationResponseSchema = z.lazy(() => createUsersWithListInput200Schema) as z.ZodType<CreateUsersWithListInputMutationResponse>;