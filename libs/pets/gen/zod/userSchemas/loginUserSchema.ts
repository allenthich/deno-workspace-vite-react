import type { LoginUserQueryParams, LoginUser200, LoginUser400, LoginUserQueryResponse } from "../../types/LoginUser.ts";
import { z } from "zod";

 export const loginUserQueryParamsSchema = z.object({ "username": z.string().describe("The user name for login").optional(), "password": z.string().describe("The password for login in clear text").optional() }).optional() as z.ZodType<LoginUserQueryParams>;

 /**
 * @description successful operation
 */
export const loginUser200Schema = z.string() as z.ZodType<LoginUser200>;

 /**
 * @description Invalid username/password supplied
 */
export const loginUser400Schema = z.unknown() as z.ZodType<LoginUser400>;

 export const loginUserQueryResponseSchema = z.lazy(() => loginUser200Schema) as z.ZodType<LoginUserQueryResponse>;