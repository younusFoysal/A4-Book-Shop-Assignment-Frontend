import { useDeleteOrderMutation, useGetAllOrderQuery, useUpdateorderMutation } from "@/redux/features/orders/OrderApi";
import { MoreVertical, Trash2, CheckCircle, Clock, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import UseUser from "@/hook/UseUser.tsx";


const Allorder = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");


    const user = UseUser();
    const queryString = user?.role === "admin"
        ? `?search=${searchTerm}&sortBy=${sortOrder}`
        : `?search=${user?.email}&sortBy=${sortOrder}`;

    const { data: ordersResponse, isLoading, isError, refetch } = useGetAllOrderQuery(queryString);
    console.log(ordersResponse);


    // const { data: ordersResponse, isLoading, isError, refetch } = useGetAllOrderQuery(
    //     `?search=${searchTerm}&sortBy=${sortOrder}&email=${user?.email}`,
    // );

    const [deletedata] = useDeleteOrderMutation();
    const [updateOrder] = useUpdateorderMutation();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const orders = ordersResponse?.data || [];

    if (isLoading) return <div className="flex justify-center items-center h-screen"><h1>Loading...</h1></div>;
    if (isError) return <div className="text-center text-red-500">Error fetching orders</div>;

    const handleDeleteProduct = async (id: string) => {
        try {
            await deletedata(id);
            refetch();
            toast.success("Order deleted successfully");
        } catch (err) {
            toast.error("Cannot delete order");
        }
    };

    const handleToggleStatus = async (id: string, currentStatus: string) => {
        const newStatus = currentStatus === "Success" ? "Pending" : "Success";
        try {
            await updateOrder({
                productId: id,
                updatedProduct: { paymentStatus: newStatus },
            });
            refetch();
            toast.success(`Order marked as ${newStatus}!`);
            setOpenDropdown(null);
        } catch (err) {
            toast.error("Failed to update order status");
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#04345c]">Order Management</h2>
            </div>

            <div className="mb-6 flex flex-wrap gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search by name, email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-full px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c] transition-all outline-none"
                    />
                </div>
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="px-4 py-2 border rounded-3xl text-sm focus:ring-2 focus:ring-[#04345c]/10 focus:border-[#04345c]"
                >
                    <option value="desc">Newest First</option>
                    <option value="asc">Oldest First</option>
                    <option value="paymentStatus">Payment Status</option>
                </select>
            </div>

            <div className="overflow-x-auto rounded-3xl drop-shadow-md">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="px-6 py-3">No</th>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Transaction ID</th>
                        <th className="px-6 py-3">Quantity</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Price</th>
                        {user?.role === "admin" && <th className="px-6 py-3">Actions</th>}

                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((data: any, index: number) => (
                        <tr key={data._id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-3">{index + 1}</td>
                            <td className="px-6 py-3 font-medium text-gray-900">{data.user.name}</td>
                            <td className="px-6 py-3">{data.user.email}</td>
                            <td className="px-6 py-3">{data.paymentId}</td>
                            <td className="px-6 py-3">{data.quantity}</td>
                            <td className="px-6 py-3">
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                        data.paymentStatus === "Success"
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                        {data.paymentStatus}
                                    </span>
                            </td>
                            <td className="px-6 py-4">{data.totalPrice}</td>

                            {user?.role === "admin" && (

                            <td className="px-6 py-4 relative">
                                {/* Dropdown Toggle Button */}
                                <button
                                    onClick={() =>
                                        setOpenDropdown(openDropdown === data._id ? null : data._id)
                                    }
                                    className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    <MoreVertical className="w-5 h-5"/>
                                </button>

                                {/* Dropdown Menu */}
                                {openDropdown === data._id && (
                                    <div
                                        className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-lg z-10"
                                        style={{
                                            bottom: openDropdown === data._id && index > orders.length - 3 ? '100%' : 'auto',
                                            marginBottom: openDropdown === data._id && index > orders.length - 3 ? '10px' : '0'
                                        }}
                                    >
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                            {/* Delete Order */}
                                            <li>
                                                <button
                                                    onClick={() => handleDeleteProduct(data._id)}
                                                    className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                >
                                                    <Trash2 className="w-4 h-4"/>
                                                    Delete Order
                                                </button>
                                            </li>
                                            {/* Toggle Order Status */}
                                            <li>
                                                <button
                                                    onClick={() =>
                                                        handleToggleStatus(data._id, data.paymentStatus)
                                                    }
                                                    className="flex items-center gap-2 w-full px-4 py-2 text-yellow-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                >
                                                    {data.paymentStatus === "Success" ? (
                                                        <div className="text-yellow-500 flex gap-2 items-center">
                                                            <Clock className="w-4 h-4"/>
                                                            Mark as Pending
                                                        </div>
                                                    ) : (
                                                        <div className="text-green-500 flex gap-2 items-center">
                                                            <CheckCircle className="w-4 h-4"/>
                                                            Mark as Success
                                                        </div>
                                                    )}
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </td>
                                )}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allorder;
