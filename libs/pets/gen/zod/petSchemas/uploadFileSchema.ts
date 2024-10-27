import type { UploadFilePathParams, UploadFileQueryParams, UploadFile200, UploadFileMutationRequest, UploadFileMutationResponse } from "../../types/UploadFile.ts";
import { apiResponseSchema } from "../apiResponseSchema.ts";
import { z } from "zod";

 export const uploadFilePathParamsSchema = z.object({ "petId": z.number().int().describe("ID of pet to update") }) as z.ZodType<UploadFilePathParams>;

 export const uploadFileQueryParamsSchema = z.object({ "additionalMetadata": z.string().describe("Additional Metadata").optional() }).optional() as z.ZodType<UploadFileQueryParams>;

 /**
 * @description successful operation
 */
export const uploadFile200Schema = z.lazy(() => apiResponseSchema) as z.ZodType<UploadFile200>;

 export const uploadFileMutationRequestSchema = z.string() as z.ZodType<UploadFileMutationRequest>;

 export const uploadFileMutationResponseSchema = z.lazy(() => uploadFile200Schema) as z.ZodType<UploadFileMutationResponse>;