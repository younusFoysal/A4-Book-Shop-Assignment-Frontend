import React, { useState } from "react";
import { Package, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { FaHashtag } from "react-icons/fa6";

interface Product {
    _id: string;
    image: string;
    title: string;
    rating: number;
    category: string;
    inStock: boolean;
    author: string;
    price: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="group bg-white border border-gray-200 rounded-3xl p-4 hover:shadow-lg transition-all duration-300">
            <Link to={`/products/${product._id}`}>
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4">
                    {isLoading && (
                        <div className="w-full h-full bg-gray-200 animate-pulse rounded-2xl"></div>
                    )}
                    <img
                        src={product.image}
                        alt={product.title}
                        className={`object-cover shadow-md w-full h-full group-hover:scale-105 transition-transform duration-300 ${
                            isLoading ? "hidden" : "block"
                        }`}
                        onLoad={() => setIsLoading(false)}
                    />
                    <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
                        <div className="flex items-center gap-1">
                            <Star size={14} className="fill-yellow-500 text-yellow-500" />
                            <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center gap-2">
                        <span className="flex items-center text-xs font-medium px-2 py-1 bg-[#04345c]/10 text-[#04345c] rounded-full">
                            <FaHashtag /> {product.category}
                        </span>
                        {product.inStock ? (
                            <span className="flex items-center gap-1 text-xs text-green-600">
                                <Package className="" size="15" /> In Stock
                            </span>
                        ) : (
                            <span className="text-xs text-red-600">Out of Stock</span>
                        )}
                    </div>

                    <h3 className="font-semibold text-gray-800 line-clamp-1">{product.title}</h3>
                    <p className="text-sm font-medium text-gray-500">Author: {product.author}</p>

                    <div className="flex items-center justify-between pt-2">
                        <span className="text-xl font-bold text-[#04345c]">${product.price}</span>
                    </div>
                    <button
                        className="text-sm mt-2 w-full px-4 py-3 bg-[#04345c] hover:bg-white border border-[#04345c] text-white hover:text-[#04345c] rounded-full font-semibold transition-colors duration-500 drop-shadow-lg disabled:opacity-50">
                        View Details
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
