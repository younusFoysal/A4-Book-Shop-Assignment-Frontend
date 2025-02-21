import { baseApi } from "@/redux/api/baseApi";
interface TOrderData {
    productId: string;
    productName: string;
    productImage: string;
    productPrice: number;
    quantity: number;
    totalPrice: number;
    user: {
        name: string;
        email: string;
    };
    paymentStatus: string;
    paymentId: string;
    createdAt: Date;
}

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrder: builder.query<TOrderData[], string>({
            query: () => ({
                url: "/orders",
                method: "GET",
            }),
        }),
        updateorder: builder.mutation<
            TOrderData,
            { productId: string; updatedProduct: Partial<TOrderData> }
        >({
            query: ({ productId, updatedProduct }) => ({
                url: `/order/${productId}`,
                method: "PUT",
                body: updatedProduct,
            }),
        }),
        deleteOrder: builder.mutation<{ message: string }, string>({
            query: (orderId) => ({
                url: `/order/${orderId}`,
                method: "DELETE",
            }),
        }),
    }),

    overrideExisting: false,
});

export const {
    useDeleteOrderMutation,
    useGetAllOrderQuery,
    useUpdateorderMutation,
} = orderApi;