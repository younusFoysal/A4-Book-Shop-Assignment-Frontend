import React from "react";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import ProductCard from "@/components/home/ProductCard.tsx";

const FeaturedProduct: React.FC = () => {
  const {
    data: productsResponse,
    isLoading,
    isError,
  } = useGetAllProductsQuery("");

  const products = productsResponse?.data || [];

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Loading...</h1>
      </div>
    );

  if (isError)
    return (
      <div className="text-center text-red-500">Error fetching products</div>
    );

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

          {products.slice(0, 16).map((product) => (<ProductCard key={product._id} product={product} />))}


      </div>
      <div className="flex items-center justify-center mt-8">
        <Link to="/allProducts">
          <button className="bg-primary-jext px-4 py-3 rounded-md text-white">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
