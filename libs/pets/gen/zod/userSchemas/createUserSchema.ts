import type { CreateUserError, CreateUserMutationRequest, CreateUserMutationResponse } from "../../types/CreateUser.ts";
import { userSchema } from "../userSchema.ts";
import { z } from "zod";

 /**
 * @description successful operation
 */
export const createUserErrorSchema = z.lazy(() => userSchema) as z.ZodType<CreateUserError>;

 /**
 * @description Created user object
 */
export const createUserMutationRequestSchema = z.lazy(() => userSchema) as z.ZodType<CreateUserMutationRequest>;

 export const createUserMutationResponseSchema = z.unknown() as z.ZodType<CreateUserMutationResponse>;