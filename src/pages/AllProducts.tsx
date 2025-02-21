import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import React, { useState } from "react";

import { Link } from "react-router-dom";

const AllProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const {
    data: productsResponse,
    isLoading,
    isError,
  } = useGetAllProductsQuery("");

  const products = productsResponse?.data || [];

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;

    const matchesBrand =
      selectedBrand === "" || product.brand === selectedBrand;

    const matchesModel =
      selectedModel === "" || product.model === selectedModel;

    const matchesAvailability =
      selectedAvailability === "" ||
      (selectedAvailability === "available" && product.available) ||
      (selectedAvailability === "unavailable" && !product.available);

    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return (
      matchesSearchTerm &&
      matchesCategory &&
      matchesBrand &&
      matchesModel &&
      matchesAvailability &&
      matchesPrice
    );
  });

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

  // Get unique filter options from products
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  const uniqueBrands = [...new Set(products.map((product) => product.brand))];
  const uniqueModels = [...new Set(products.map((product) => product.model))];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">All Products</h1>

      {/* Search and Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search by name, brand, or category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-jext"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-jext"
        >
          <option value="">All Categories</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-jext"
        >
          <option value="">All Brands</option>
          {uniqueBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>

        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-jext"
        >
          <option value="">All Models</option>
          {uniqueModels.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>

        <select
          value={selectedAvailability}
          onChange={(e) => setSelectedAvailability(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-jext"
        >
          <option value="">All Availability</option>
          <option value="available">In Stock</option>
          <option value="unavailable">Out of Stock</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
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
              <h3 className="text-2xl capitalize font-bold">{product.brand}</h3>
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
    </div>
  );
};

export default AllProductsPage;
