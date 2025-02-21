/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/features/product/productApi";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const UpdateProductForm: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const {
    data: productData,
    isLoading: isFetching,
    refetch,
  } = useGetSingleProductQuery(productId as string);
  const [updateProduct] = useUpdateProductMutation();

  useEffect(() => {
    if (productData) {
      setName(productData.data.name);
      setBrand(productData.data.brand);
      setModel(productData.data.model);
      setDescription(productData.data.description);
      setImage(null);
      setRating(productData.data.rating);
      setQuantity(productData.data.quantity);
      setCategory(productData.data.category);
      setPrice(productData.data.price);
      setAvailable(productData.data.available);
    }
  }, [productData]);

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=05fe858dfb3c3d87e4d12bcbc8847b36",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data.data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // If a new image is uploaded, get the new URL, otherwise use existing one
      let imageUrl = productData?.data.image || "";
      if (image) {
        imageUrl = await handleImageUpload(image);
      }

      const updatedProduct = {
        name,
        brand,
        model,
        description,
        image: imageUrl, // Use the determined image URL
        rating,
        quantity,
        category,
        price,
        available,
      };

      await updateProduct({
        productId: productId as string,
        updatedProduct,
      });

      toast.success("Product updated successfully!");
      refetch();
    } catch (error) {
      console.error("Failed to update product:", error);
      toast.error("Failed to update product.");
    } finally {
      setIsLoading(false);
    }
  };
  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-6">Update Product</h2>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Brand
            </label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Model
            </label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Rating
            </label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              min="0"
              max="5"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              min="0"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Availability
            </label>
            <select
              value={available ? "true" : "false"}
              onChange={(e) => setAvailable(e.target.value === "true")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="true">Available</option>
              <option value="false">Out of Stock</option>
            </select>
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <input
              type="file"
              onChange={(e) =>
                setImage(e.target.files ? e.target.files[0] : null)
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
            {/* Display current image */}
            {productData?.data.image && (
              <img
                src={productData.data.image}
                alt="Current Product"
                className="mt-2 h-32 w-32 object-cover rounded-md shadow-md"
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {isLoading ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProductForm;
