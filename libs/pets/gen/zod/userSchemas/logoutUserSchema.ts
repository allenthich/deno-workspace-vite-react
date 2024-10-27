import type { LogoutUserError, LogoutUserQueryResponse } from "../../types/LogoutUser.ts";
import { z } from "zod";

 /**
 * @description successful operation
 */
export const logoutUserErrorSchema = z.unknown() as z.ZodType<LogoutUserError>;

 export const logoutUserQueryResponseSchema = z.unknown() as z.ZodType<LogoutUserQueryResponse>;