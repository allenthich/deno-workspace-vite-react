import type { DeleteUserPathParams, DeleteUser400, DeleteUser404, DeleteUserMutationResponse } from "../../types/DeleteUser.ts";
import { z } from "zod";

 export const deleteUserPathParamsSchema = z.object({ "username": z.string().describe("The name that needs to be deleted").nullable() }) as z.ZodType<DeleteUserPathParams>;

 /**
 * @description Invalid username supplied
 */
export const deleteUser400Schema = z.unknown() as z.ZodType<DeleteUser400>;

 /**
 * @description User not found
 */
export const deleteUser404Schema = z.unknown() as z.ZodType<DeleteUser404>;

 export const deleteUserMutationResponseSchema = z.unknown() as z.ZodType<DeleteUserMutationResponse>;