import {Product, useGetAllProductsQuery} from "@/redux/features/product/productApi";
import { Search, Star, SlidersHorizontal } from "lucide-react";
import  { useState } from "react";
import ProductCard from "@/components/home/ProductCard.tsx";


const AllProductsPage = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedAvailability, setSelectedAvailability] = useState("");
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [ratingFilter, setRatingFilter] = useState(0);
    const [sortOrder, setSortOrder] = useState("desc");

    const { data: productsResponse, isLoading } = useGetAllProductsQuery(
        `?search=${searchTerm}&category=${selectedCategory}&sortBy=${sortOrder}&inStock=${selectedAvailability}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&rating=${ratingFilter}`
    );
    console.log([productsResponse, isLoading]);

    const products = productsResponse?.data || [];
    const categories = ["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-[#04345c]">Browse All Books</h1>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-2  bg-[#04345c] hover:bg-white border border-[#04345c] text-white hover:text-[#04345c] rounded-3xl font-semibold transition-colors duration-500 text-base drop-shadow-lg  disabled:opacity-50"
                >
                    <SlidersHorizontal size={20} />
                    <span>Filters</span>
                </button>
            </div>

            <div className="mb-8">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search books by title, author, or category..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-full px-4 py-3 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none"
                    />
                </div>
            </div>



                <div
                    className={`mb-8 bg-white rounded-2xl shadow-lg border transform transition-all duration-500 ease-in-out origin-top
    ${showFilters ? 'opacity-100 max-h-[1000px] p-6' : 'opacity-0 max-h-0 p-0 overflow-hidden'}
  `}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-4 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c]"
                            >
                                <option value="">All Categories</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                            <select
                                value={selectedAvailability}
                                onChange={(e) => setSelectedAvailability(e.target.value)}
                                className="w-full px-4 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c]"
                            >
                                <option value="">All</option>
                                <option value="true">In Stock</option>
                                <option value="false">Out of Stock</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                            <div className="flex items-center gap-2">
                                {[1, 2, 3, 4, 5].map((rating) => (
                                    <button
                                        key={rating}
                                        onClick={() => setRatingFilter(rating)}
                                        className={`p-2 rounded-lg ${ratingFilter === rating ? 'bg-[#04345c] text-white' : 'bg-gray-100'}`}
                                    >
                                        <Star
                                            className={`w-4 h-4 ${ratingFilter === rating ? 'fill-white' : 'fill-yellow-400'}`}/>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                            <select
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="w-full px-4 py-2 border rounded-xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c]"
                            >
                                <option value="desc">Newest First</option>
                                <option value="asc">Oldest First</option>
                                <option value="price_asc">Price: Low to High</option>
                                <option value="price_desc">Price: High to Low</option>
                                <option value="rating_desc">Highest Rated</option>
                            </select>
                        </div>

                        <div className="col-span-full">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Price Range: ${priceRange[0]} - ${priceRange[1]}
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>
                    </div>
                </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            {products.slice(0, 16).map((product: Product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}

            </div>
        </div>
    );
};

export default AllProductsPage;
