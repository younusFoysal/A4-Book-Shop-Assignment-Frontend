import { useGetAllOrderQuery } from "@/redux/features/orders/OrderApi";
import { ShoppingBag, Clock, CheckCircle, User } from "lucide-react";
import { Link } from "react-router-dom";
import UseUser from "@/hook/UseUser";

const UserDashboard = () => {
    const user = UseUser();
    const { data: ordersResponse } = useGetAllOrderQuery(
        `?search=${user?.email}`
    );

    const orders = ordersResponse?.data || [];
    const totalOrders = orders.length;
    const pendingOrders = orders.filter((order: { paymentStatus: string }) => order.paymentStatus === "pending").length;    const completedOrders = orders.filter((order: { paymentStatus: string }) => order.paymentStatus === "Success").length;
    const totalSpent = orders.reduce((sum: number, order: { totalPrice: number }) => sum + order.totalPrice, 0);

    return (
        <div className="p-6 space-y-6">
            {/* Welcome Section */}
            <div className="bg-white rounded-3xl p-6 drop-shadow-lg">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#04345c] rounded-full text-white">
                        <User size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-[#04345c]">Welcome, {user?.name}</h2>
                        <p className="text-gray-600">Here's what's happening with your orders</p>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-3xl drop-shadow-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500 text-sm">Total Orders</p>
                            <h3 className="text-2xl font-bold text-[#04345c]">{totalOrders}</h3>
                        </div>
                        <div className="p-3 bg-blue-100 rounded-full">
                            <ShoppingBag className="w-6 h-6 text-blue-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl drop-shadow-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500 text-sm">Pending Orders</p>
                            <h3 className="text-2xl font-bold text-[#04345c]">{pendingOrders}</h3>
                        </div>
                        <div className="p-3 bg-yellow-100 rounded-full">
                            <Clock className="w-6 h-6 text-yellow-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl drop-shadow-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500 text-sm">Completed Orders</p>
                            <h3 className="text-2xl font-bold text-[#04345c]">{completedOrders}</h3>
                        </div>
                        <div className="p-3 bg-green-100 rounded-full">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl drop-shadow-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500 text-sm">Total Spent</p>
                            <h3 className="text-2xl font-bold text-[#04345c]">${totalSpent.toFixed(2)}</h3>
                        </div>
                        <div className="p-3 bg-purple-100 rounded-full">
                            <ShoppingBag className="w-6 h-6 text-purple-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-3xl p-6 drop-shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-[#04345c]">Recent Orders</h2>
                    <Link to="/dashboard/allorders" className="text-sm text-blue-600 hover:underline">
                        View All Orders
                    </Link>
                </div>
                <div className="space-y-4">
                    {orders.slice(0, 5).map((order: { _id: string; productImage: string; productName: string; quantity: number; totalPrice: number; paymentStatus: string }) => (
                        <div key={order._id}
                             className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-xl border border-gray-100 transition duration-200">
                            <div className="flex items-center gap-4">
                                <img
                                    src={order.productImage}
                                    alt={order.productName}
                                    className="w-12 h-12 object-cover rounded-lg"
                                />
                                <div>
                                    <h3 className="font-medium text-gray-900">{order.productName}</h3>
                                    <p className="text-sm text-gray-500">Quantity: {order.quantity}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-medium text-[#04345c]">${order.totalPrice}</p>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                    order.paymentStatus === "Success"
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                }`}>
                  {order.paymentStatus}
                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
