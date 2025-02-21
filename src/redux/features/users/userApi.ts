import { baseApi } from "@/redux/api/baseApi";

interface TUser {
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
    isBlocked: boolean;
}

const UserApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAlluser: builder.query<TUser[], string>({
            query: () => ({
                url: "/users",
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
                method: "PUT",
                body: updateduser,
            }),
        }),
    }),

    overrideExisting: false,
});

export const {
    useGetAlluserQuery,
    useUpdateuserMutation,
    useDeleteUserMutation,
} = UserApi;