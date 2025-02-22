import { useGetSingleProductQuery, useUpdateProductMutation } from "@/redux/features/product/productApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { X } from "lucide-react";

const UpdateProductForm = () => {
  const { productId } = useParams<{ productId: string }>();
  const [updateProduct] = useUpdateProductMutation();
  const { data: productData, isLoading: isFetching } = useGetSingleProductQuery(productId as string);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: 0,
    category: "",
    description: "",
    image: null as File | null,
    rating: 0,
    quantity: 0,
    inStock: true
  });

  useEffect(() => {
    if (productData?.data) {
      setFormData({
        ...productData.data,
        image: null
      });
    }
  }, [productData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
      let imageUrl = productData?.data.image || "";
      if (formData.image) {
        imageUrl = await handleImageUpload(formData.image);
      }

      const updatedData = {
        ...formData,
        image: imageUrl,
        price: Number(formData.price),
        rating: Number(formData.rating),
        quantity: Number(formData.quantity)
      };

      await updateProduct({
        productId: productId as string,
        updatedProduct: updatedData
      }).unwrap();

      toast.success("Book updated successfully!");
    } catch (error) {
      toast.error("Failed to update book");
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#04345c]"></div>
        </div>
    );
  }

  return (
      <div className="bg-white border rounded-lg drop-shadow-lg relative ">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Update Book</h3>
          <button className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Book Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Author</label>
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Category</label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    required
                >
                  <option value="">Select Category</option>
                  <option value="Fiction">Fiction</option>
                  <option value="NonFiction">Non Fiction</option>
                  <option value="SelfDevelopment">Self Development</option>
                  <option value="Business">Business</option>
                  <option value="Technology">Technology</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    min="0"
                    step="0.01"
                    required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Rating</label>
                <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    min="0"
                    max="5"
                    step="0.1"
                    required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    min="0"
                    required
                />
              </div>

              <div className="col-span-full">
                <label className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    required
                />
              </div>

              <div className="col-span-full">
                <label className="text-sm font-medium text-gray-900 block mb-2">Book Cover Image</label>
                <input
                    type="file"
                    onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.files?.[0] || null }))}
                    className="w-full px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    accept="image/*"
                />
                {productData?.data.image && (
                    <img
                        src={productData.data.image}
                        alt="Current Product"
                        className="mt-2 h-32 w-32 object-cover rounded-md"
                    />
                )}
              </div>

              <div className="col-span-full">
                <label className="inline-flex items-center">
                  <input
                      type="checkbox"
                      name="inStock"
                      checked={formData.inStock}
                      onChange={(e) => setFormData(prev => ({ ...prev, inStock: e.target.checked }))}
                      className="rounded border-gray-300 text-[#04345c] shadow-sm focus:border-[#04345c] focus:ring focus:ring-[#04345c]/20 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-900">In Stock</span>
                </label>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 rounded-b mt-6">
              <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-3 text-base font-bold text-white bg-[#04345c] rounded-3xl hover:bg-[#048ed6] transition-all duration-200 disabled:opacity-50"
              >
                {isLoading ? "Updating Book..." : "Update Book"}
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default UpdateProductForm;
