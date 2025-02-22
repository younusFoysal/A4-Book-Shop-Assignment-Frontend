import { useAddProductMutation } from "@/redux/features/product/productApi";
import { useState } from "react";
import { toast } from "sonner";
import { X } from "lucide-react";

const AddProduct = () => {
  const [addProduct] = useAddProductMutation();
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
      let imageUrl = "";
      if (formData.image) {
        imageUrl = await handleImageUpload(formData.image);
      }

      const productData = {
        ...formData,
        price: Number(formData.price),
        quantity: Number(formData.quantity),
        rating: Number(formData.rating),
        image: imageUrl,
      };


      console.log(formData)
      await addProduct({ ...productData, image: imageUrl }).unwrap();
      toast.success("Book added successfully!");
      setFormData({
        title: "",
        author: "",
        price: 0,
        category: "",
        description: "",
        image: null,
        rating: 0,
        quantity: 0,
        inStock: true
      });
    } catch (error) {
      toast.error("Failed to add book");
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="bg-white border rounded-3xl drop-shadow-xl relative mt-4">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Add New Book</h3>
          {/*<button className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">*/}
          {/*  <X className="w-5 h-5" />*/}
          {/*</button>*/}
        </div>

        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2 ml-3">Book Title</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-2xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    placeholder="Enter book title"
                    required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2 ml-3">Author</label>
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-2xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    placeholder="Eckhart Tolle"
                    required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2 ml-3">Category</label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-2xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
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
                <label className="text-sm font-medium text-gray-900 block mb-2 ml-3">Price</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-2xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    placeholder="14.99"
                    min="0"
                    step="0.01"
                    required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2 ml-3">Rating</label>
                <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-2xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    min="0"
                    max="5"
                    step="0.1"
                    required
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2 ml-3">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-2xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    min="0"
                    required
                />
              </div>

              <div className="col-span-full">
                <label className="text-sm font-medium text-gray-900 block mb-2 ml-3">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    placeholder="Book description..."
                    required
                />
              </div>

              <div className="col-span-full">
                <label className="text-sm font-medium text-gray-900 block mb-2 ml-3">Book Cover Image</label>
                <input
                    type="file"
                    onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.files?.[0] || null }))}
                    className="w-full px-4 py-2 border rounded-2xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border-[#04345c]/70"
                    accept="image/*"
                    required
                />
              </div>

              <div className="col-span-full">
                <label className="inline-flex items-center">
                  <input
                      type="checkbox"
                      name="inStock"
                      checked={formData.inStock}
                      onChange={(e) => setFormData(prev => ({ ...prev, inStock: e.target.checked }))}
                      className="rounded border-gray-300 text-cyan-600 shadow-sm focus:border-cyan-600 focus:ring focus:ring-cyan-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-900">In Stock</span>
                </label>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 rounded-b mt-6">
              <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2 px-6 bg-[#04345c] hover:bg-white border border-[#04345c] text-white hover:text-[#04345c] rounded-2xl font-semibold transition-colors duration-500 text-base drop-shadow-lg  disabled:opacity-50"
              >
                {isLoading ? "Adding Book..." : "Add Book"}
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default AddProduct;
