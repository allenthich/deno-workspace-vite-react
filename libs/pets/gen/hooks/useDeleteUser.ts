import client from "@kubb/plugin-client/client";
import type { DeleteUserMutationResponse, DeleteUserPathParams, DeleteUser400, DeleteUser404 } from "../types/DeleteUser.ts";
import type { RequestConfig } from "@kubb/plugin-client/client";
import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

 export const deleteUserMutationKey = () => [{ "url": "/user/{username}" }] as const;

 export type DeleteUserMutationKey = ReturnType<typeof deleteUserMutationKey>;

 /**
 * @description This can only be done by the logged in user.
 * @summary Delete user
 * @link /user/:username
 */
async function deleteUser(username: DeleteUserPathParams["username"], config: Partial<RequestConfig> = {}) {
    const res = await client<DeleteUserMutationResponse, DeleteUser400 | DeleteUser404, unknown>({ method: "DELETE", url: `/user/${username}`, baseURL: "https://petstore3.swagger.io/api/v3", ...config });
    return res.data;
}

 /**
 * @description This can only be done by the logged in user.
 * @summary Delete user
 * @link /user/:username
 */
export function useDeleteUser(options: {
    mutation?: UseMutationOptions<DeleteUserMutationResponse, DeleteUser400 | DeleteUser404, {
        username: DeleteUserPathParams["username"];
    }>;
    client?: Partial<RequestConfig>;
} = {}) {
    const { mutation: mutationOptions, client: config = {} } = options ?? {};
    const mutationKey = mutationOptions?.mutationKey ?? deleteUserMutationKey();
    return useMutation<DeleteUserMutationResponse, DeleteUser400 | DeleteUser404, {
        username: DeleteUserPathParams["username"];
    }>({
        mutationFn: async ({ username }) => {
            return deleteUser(username, config);
        },
        mutationKey,
        ...mutationOptions
    });
}