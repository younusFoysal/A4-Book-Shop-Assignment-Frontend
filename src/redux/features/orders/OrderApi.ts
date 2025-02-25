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
        getAllOrder: builder.query({
            query: (queryString) => ({
                url: `/orders${queryString}`,
                method: "GET",
            }),
        }),
        addOrder: builder.mutation<TOrderData, Partial<TOrderData>>({
            query: (newOrder) => ({
                url: `/orders`,
                method: "POST",
                body: newOrder,
            }),
        }),
        updateorder: builder.mutation<
            TOrderData,
            { productId: string; updatedProduct: Partial<TOrderData> }
        >({
            query: ({ productId, updatedProduct }) => ({
                url: `/orders/${productId}`,
                method: "PATCH",
                body: updatedProduct,
            }),
        }),
        deleteOrder: builder.mutation<{ message: string }, string>({
            query: (orderId) => ({
                url: `/orders/${orderId}`,
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
    useAddOrderMutation,
} = orderApi;