import { useDeleteProductMutation, useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { FilePenLine, Trash2, Star, LayoutGrid, Table, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

const AdminAllProduct = () => {
    const [isTableView, setIsTableView] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");

    const { data: productsResponse, isLoading, refetch } = useGetAllProductsQuery(
        `?search=${searchTerm}&category=${selectedCategory}&sortBy=${sortOrder}`
    );
    console.log("productsResponse", productsResponse);

    const [deleteData] = useDeleteProductMutation();
    const products = productsResponse?.data || [];

    const handleDeleteProduct = async (id: string) => {
        try {
            await deleteData(id);
            refetch();
            toast.success("Book deleted successfully");
        } catch (err) {
            toast.error("Failed to delete book");
        }
    };


    const categories = ["Fiction", "NonFiction", "SelfDevelopment", "Business", "Technology"];

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#04345c]">Book Inventory</h2>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsTableView(false)}
                            className={`p-2 rounded-lg ${!isTableView ? 'bg-[#04345c] text-white' : 'bg-gray-100'}`}
                        >
                            <LayoutGrid size={20} />
                        </button>
                        <button
                            onClick={() => setIsTableView(true)}
                            className={`p-2 rounded-lg ${isTableView ? 'bg-[#04345c] text-white' : 'bg-gray-100'}`}
                        >
                            <Table size={20} />
                        </button>
                    </div>
                    <Link
                        to="/dashboard/add-product"
                        className="px-6 py-2 bg-[#04345c] text-white rounded-3xl hover:bg-[#048ed6] transition-all duration-200"
                    >
                        Add New Book
                    </Link>
                </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search books..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-full px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none"
                    />
                </div>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c]"
                >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c]"
                >
                    <option value="desc">Newest First</option>
                    <option value="asc">Oldest First</option>
                </select>
            </div>

            {isTableView ? (
                <div className="overflow-x-auto rounded-3xl  drop-shadow-md">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px-6 py-3">Image</th>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Author</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Stock</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((book) => (
                            <tr key={book._id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-3">
                                    <img src={book.image} alt={book.title} className="w-12 h-12 object-cover rounded" />
                                </td>
                                <td className="px-6 py-3 font-medium text-gray-900">{book.title}</td>
                                <td className="px-6 py-3">{book.author}</td>
                                <td className="px-6 py-3">{book.category}</td>
                                <td className="px-6 py-3">${book.price}</td>
                                <td className="px-6 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${book.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {book.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                                </td>
                                <td className="px-6 py-3">
                                    <div className="flex gap-2">
                                        <Link to={`/dashboard/update-product/${book._id}`}>
                                            <FilePenLine className="w-5 h-5 text-blue-600" />
                                        </Link>
                                        <button onClick={() => handleDeleteProduct(book._id)}>
                                            <Trash2 className="w-5 h-5 text-red-600" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                // Existing grid view code remains the same
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((book) => (
                        <div key={book._id}
                             className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-200">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute top-2 right-2 flex items-center gap-1 bg-white px-2 py-1 rounded-full">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400"/>
                                    <span className="text-sm font-medium">{book.rating}</span>
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 truncate">{book.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">by {book.author}</p>

                                <div className="flex items-center justify-between mb-2">
                                    <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">{book.category}</span>
                                    <span className="font-bold text-[#04345c]">${book.price}</span>
                                </div>

                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm text-gray-600">Quantity: {book.quantity}</span>
                                    <span className={`text-sm ${book.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {book.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
                                </div>

                                <div className="flex justify-end gap-3 pt-2 border-t">
                                    <Link
                                        to={`/dashboard/update-product/${book._id}`}
                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                                    >
                                        <FilePenLine className="w-5 h-5"/>
                                    </Link>
                                    <button
                                        onClick={() => handleDeleteProduct(book._id)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminAllProduct;
