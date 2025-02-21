import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    return (
        <div className="group bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
            <Link to={`/products/${product._id}`}>
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="object-cover shadow-md w-full h-full group-hover:scale-105 transition-transform duration-300"
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
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-medium px-2 py-1 bg-[#04345c]/10 text-[#04345c] rounded-full">
                            {product.category}
                        </span>
                        {product.inStock ? (
                            <span className="text-xs text-green-600">In Stock</span>
                        ) : (
                            <span className="text-xs text-red-600">Out of Stock</span>
                        )}
                    </div>

                    <h3 className="font-semibold text-gray-800 line-clamp-1">{product.title}</h3>
                    <p className="text-sm text-gray-500">{product.author}</p>

                    <div className="flex items-center justify-between pt-2">
                        <span className="text-lg font-bold text-[#04345c]">${product.price}</span>
                        <button className="text-sm font-medium text-[#04345c] hover:underline">
                            View Details →
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
