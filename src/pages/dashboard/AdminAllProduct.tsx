/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/product/productApi";
import { FilePenLine, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const AdminAllProduct = () => {
  const {
    data: productsResponse,
    isLoading,
    isError,
    refetch,
  } = useGetAllProductsQuery("");

  const [deletedata] = useDeleteProductMutation();

  const products = productsResponse?.data || [];

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Loading.........</h1>
      </div>
    );

  if (isError)
    return (
      <div className="text-center text-red-500">Error fetching products</div>
    );

  const handleDeleteProduct = async (id: string) => {
    try {
      await deletedata(id);
      refetch();
      toast.success("Product deleted successfully");
    } catch (err) {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Car Name
            </th>
            <th scope="col" className="px-6 py-3">
              Brand
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((data, index) => (
            <tr
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
              key={data?._id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data.name}
              </th>
              <td className="px-6 py-4">{data.brand}</td>
              <td className="px-6 py-4">{data.category}</td>
              <td className="px-6 py-4">{data.price}</td>
              <td className="px-6 py-4 flex gap-2">
                <Link to={`/dashboard/update-product/${data._id}`}>
                  <FilePenLine className="text-green-400 w-5 h-5" />
                </Link>
                <button onClick={() => handleDeleteProduct(data._id)}>
                  <Trash2 className="text-red-500  w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAllProduct;
