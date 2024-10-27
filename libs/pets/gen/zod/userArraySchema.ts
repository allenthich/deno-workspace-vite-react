import type { UserArray } from "../types/UserArray.ts";
import { userSchema } from "./userSchema.ts";
import { z } from "zod";

 export const userArraySchema = z.array(z.lazy(() => userSchema)) as z.ZodType<UserArray>;