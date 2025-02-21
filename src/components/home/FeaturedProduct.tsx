import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 6).map((product) => (
          <div
            key={product._id}
            className="border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[200px] object-cover rounded-t-2xl"
            />

            <div className="p-4">
              <div className="flex justify-end">
                <div className="bg-gray-200 rounded-full flex gap-2 items-center px-4 py-1">
                  <Star size={16} className="text-primary-jext" />
                  <span className="text-sm font-semibold">
                    {product.rating}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl capitalize font-bold mt-2">
                {product.brand}
              </h3>
              <p className="text-gray-600 text-lg">{product.name}</p>

              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-500">Model: {product.model}</p>
                <p className="text-xl font-bold text-primary-jext">
                  ${product.price.toLocaleString()}
                </p>
              </div>

              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-500 capitalize">{product.category}</p>
                <p
                  className={`text-sm font-semibold ${
                    product.available ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.available ? "In Stock" : "Out of Stock"}
                </p>
              </div>

              <div className="mt-6">
                <Link to={`/products/${product._id}`}>
                  <button className="w-full bg-primary-jext text-white py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
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
