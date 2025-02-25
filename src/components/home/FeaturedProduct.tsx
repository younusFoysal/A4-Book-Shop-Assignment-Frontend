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


          <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#04345c] mb-4">
                  Featured Products
              </h2>
              <p className="text-gray-600 text-lg">
                  Discover the most read books
              </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

              {products.slice(0, 8).map((product: any) => (<ProductCard key={product._id} product={product}/>))}


          </div>
          <div className="flex items-center justify-center mt-16 mb-8">
              <Link to="/allProducts">
                  <button
                      className="w-full py-4 px-8 bg-[#04345c] hover:bg-white border border-[#04345c] text-white hover:text-[#04345c] rounded-full font-semibold transition-colors duration-500 text-base drop-shadow-lg disabled:opacity-50"
                  >
                      View All Products
                  </button>
              </Link>
          </div>
      </div>
  );
};

export default FeaturedProduct;
