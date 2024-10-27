import client from "@kubb/plugin-client/client";
import type { CreateUserMutationRequest, CreateUserMutationResponse } from "../types/CreateUser.ts";
import type { RequestConfig } from "@kubb/plugin-client/client";
import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

 export const createUserMutationKey = () => [{ "url": "/user" }] as const;

 export type CreateUserMutationKey = ReturnType<typeof createUserMutationKey>;

 /**
 * @description This can only be done by the logged in user.
 * @summary Create user
 * @link /user
 */
async function createUser(data?: CreateUserMutationRequest, config: Partial<RequestConfig<CreateUserMutationRequest>> = {}) {
    const res = await client<CreateUserMutationResponse, Error, CreateUserMutationRequest>({ method: "POST", url: `/user`, baseURL: "https://petstore3.swagger.io/api/v3", data, ...config });
    return res.data;
}

 /**
 * @description This can only be done by the logged in user.
 * @summary Create user
 * @link /user
 */
export function useCreateUser(options: {
    mutation?: UseMutationOptions<CreateUserMutationResponse, Error, {
        data?: CreateUserMutationRequest;
    }>;
    client?: Partial<RequestConfig<CreateUserMutationRequest>>;
} = {}) {
    const { mutation: mutationOptions, client: config = {} } = options ?? {};
    const mutationKey = mutationOptions?.mutationKey ?? createUserMutationKey();
    return useMutation<CreateUserMutationResponse, Error, {
        data?: CreateUserMutationRequest;
    }>({
        mutationFn: async ({ data }) => {
            return createUser(data, config);
        },
        mutationKey,
        ...mutationOptions
    });
}