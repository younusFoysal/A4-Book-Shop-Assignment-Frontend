import { baseApi } from "@/redux/api/baseApi";

interface TUser {
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
    isBlocked: boolean;
    id: string;
}

const UserApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAlluser: builder.query({
            query: (queryString) => ({
                url: `/users${queryString}`,
                method: "GET",
            }),
        }),
        deleteUser: builder.mutation<{ message: string }, string>({
            query: (userId) => ({
                url: `/user/${userId}`,
                method: "DELETE",
            }),
        }),
        updateuser: builder.mutation<
            TUser,
            { userId: string; updateduser: Partial<TUser> }
        >({
            query: ({ userId, updateduser }) => ({
                url: `/user/${userId}`,
                method: "PATCH",
                body: updateduser,
            }),
        }),
        getUser: builder.query<TUser, string>({
            query: (userId) => ({
                url: `/user/${userId}`,
                method: "GET",
            }),
        })
    }),

    overrideExisting: false,
});

export const {
    useGetAlluserQuery,
    useUpdateuserMutation,
    useDeleteUserMutation,
    useGetUserQuery,
} = UserApi;