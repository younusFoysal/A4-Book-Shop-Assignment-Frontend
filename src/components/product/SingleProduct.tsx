import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: productsResponse,
    isLoading,
    isError,
  } = useGetAllProductsQuery("");
  const products = productsResponse?.data || [];
  const product = products.find((p) => p._id === id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError || !product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  const handleBuyNow = () => {
    navigate(`/checkout/${product._id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <h2 className="text-2xl text-gray-600">{product.brand}</h2>
          <p className="mt-4 text-lg text-gray-500">{product.category}</p>

          <p className="mt-4 text-3xl font-semibold text-primary-jext">
            ${product.price.toLocaleString()}
          </p>

          <p
            className={`mt-2 text-lg font-semibold ${
              product.available ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.available ? "In Stock" : "Out of Stock"}
          </p>

          <p className="mt-4 text-gray-700">{product.description}</p>

          <button
            onClick={handleBuyNow}
            className="mt-6 bg-primary-jext text-white py-3 px-6 rounded-lg hover:bg-primary-hover transition-colors duration-300"
            disabled={!product.available}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
