import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import {Star, BookOpen, Calendar, Tag, Award, Package, Clock, BookmarkCheck, BookmarkX} from 'lucide-react';

const SingleProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: productsResponse, isLoading, isError } = useGetAllProductsQuery("");
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-[500px] h-full max-h-[600px] object-cover rounded-3xl shadow-xl"
            />
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400"/>
                <span className="text-xl font-semibold">{product.rating}</span>
              </div>
              <span className="text-gray-600">|</span>
              <div className="flex items-center gap-2">
                <Package className="text-gray-600" size={20}/>
                <span className="text-gray-600">
                {product.inStock ?
                    `${product.quantity} copies available` :
                    'Out of Stock'}
              </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <BookOpen size={20} className="text-gray-600 mt-2"/>
              <h2 className="text-2xl text-gray-600">by {product.author}</h2>
            </div>

            <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-bold text-[#04345c]">
              ${product.price.toFixed(2)}
            </span>
              <span className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                  product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {
                  product.inStock ?
                      <BookmarkCheck size={16}/> :
                      <BookmarkX size={16}/>
                }
                {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
            </div>

            <div className="mt-20">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <BookOpen size={20} className="mt-1"/>
                About this book
              </h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Tag size={20}/>
                Details
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="flex items-center gap-2 mb-2">
                    <Tag size={16}/>
                    <span className="font-medium">Category:</span> {product.category}
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar size={16}/>
                    <span className="font-medium">Published:</span> {formatDate(product.createdAt)}
                  </p>
                </div>
                <div>
                  <p className="flex items-center gap-2 mb-2">
                    <Clock size={16}/>
                    <span className="font-medium">Last Updated:</span> {formatDate(product.updatedAt)}
                  </p>
                  <p className="flex items-center gap-2">
                    <Award size={16}/>
                    <span className="font-medium">Rating:</span> {product.rating}/5
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <button
                  onClick={handleBuyNow}
                  className="flex-1 e py-4 px-8 rounded-full text-lg  flex items-center justify-center gap-2 bg-[#04345c] hover:bg-white border border-[#04345c] text-white hover:text-[#04345c]  font-semibold transition-colors duration-500  drop-shadow-lg disabled:opacity-50"
                  disabled={!product.inStock}
              >
                <BookmarkCheck size={20}/>
                Buy Now
              </button>
              {/*<button*/}
              {/*    className="px-8 py-4 border-2 border-[#04345c] text-[#04345c] rounded-lg text-lg font-semibold hover:bg-[#04345c] hover:text-white transition-colors duration-300 flex items-center gap-2"*/}
              {/*>*/}
              {/*  <ShoppingCart size={20}/>*/}
              {/*  Add to Cart*/}
              {/*</button>*/}
            </div>
          </div>
        </div>
      </div>
  );
};

export default SingleProduct;
