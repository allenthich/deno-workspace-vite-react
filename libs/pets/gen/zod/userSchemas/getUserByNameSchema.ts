import type { GetUserByNamePathParams, GetUserByName200, GetUserByName400, GetUserByName404, GetUserByNameQueryResponse } from "../../types/GetUserByName.ts";
import { userSchema } from "../userSchema.ts";
import { z } from "zod";

 export const getUserByNamePathParamsSchema = z.object({ "username": z.string().describe("The name that needs to be fetched. Use user1 for testing. ") }) as z.ZodType<GetUserByNamePathParams>;

 /**
 * @description successful operation
 */
export const getUserByName200Schema = z.lazy(() => userSchema) as z.ZodType<GetUserByName200>;

 /**
 * @description Invalid username supplied
 */
export const getUserByName400Schema = z.unknown() as z.ZodType<GetUserByName400>;

 /**
 * @description User not found
 */
export const getUserByName404Schema = z.unknown() as z.ZodType<GetUserByName404>;

 export const getUserByNameQueryResponseSchema = z.lazy(() => getUserByName200Schema) as z.ZodType<GetUserByNameQueryResponse>;