import { baseApi } from "@/redux/api/baseApi";
export interface Product {
  _id: string;
  title: string;
  author: string;
  price: number;
  category: "Fiction" | "Science" | "SelfDevelopment" | "Poetry" | "Religious";
  description: string;
  image: string;
  rating: number;
  quantity: number;
  inStock: boolean;
}

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (queryString) => ({
        url: `/allproducts${queryString}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (newProduct) => ({
        url: `/add-product`,
        method: "POST",
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation<
      Product,
      { productId: string; updatedProduct: Partial<Product> }
    >({
      query: ({ productId, updatedProduct }) => ({
        url: `/product/${productId}`,
        method: "PUT",
        body: updatedProduct,
      }),
    }),
    getSingleProduct: builder.query<Product, string>({
      query: (productId) => ({
        url: `/product/${productId}`,
        method: "GET",
      }),
    }),
    deleteProduct: builder.mutation<{ message: string }, string>({
      query: (productId) => ({
        url: `/product/${productId}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetSingleProductQuery,
} = productApi;
