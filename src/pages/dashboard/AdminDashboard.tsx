import {useGetAllOrderQuery} from "@/redux/features/orders/OrderApi.ts";
import {useGetAllProductsQuery} from "@/redux/features/product/productApi.ts";
import {useGetAlluserQuery} from "@/redux/features/users/userApi.ts";
import {BookOpen, ChevronDown, ChevronUp, DollarSign, ShoppingBag, TrendingUp, Users} from "lucide-react";
import {Link} from "react-router-dom";


type Order = {
    totalPrice: number;
    paymentStatus: string;
};

type Product = {
    inStock: boolean;
};



const AdminDashboard = () => {

    const { data: ordersResponse } = useGetAllOrderQuery("");
    const { data: productsResponse } = useGetAllProductsQuery("");
    const { data: usersResponse } = useGetAlluserQuery("");

    const orders = ordersResponse?.data || [];
    const products = productsResponse?.data || [];
    const users = usersResponse?.data || [];

    // Calculate metrics
    const totalRevenue = orders.reduce((sum: number, order: Order) => sum + order.totalPrice, 0);
    const pendingOrders = orders.filter((order: Order) => order.paymentStatus === "Pending").length;
    const outOfStockProducts = products.filter((product: Product) => !product.inStock).length;
    const activeUsers = users.filter((user: { isBlocked: boolean }) => !user.isBlocked).length;

    const recentOrders = orders.slice(0, 5);
    const topProducts = [...products]
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 5);


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-3xl drop-shadow-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500 text-sm">Total Revenue</p>
                            <h3 className="text-2xl font-bold text-[#04345c]">${totalRevenue.toFixed(2)}</h3>
                        </div>
                        <div className="p-3 bg-green-100 rounded-full">
                            <DollarSign className="w-6 h-6 text-green-600"/>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-green-600">
                        <ChevronUp className="w-4 h-4"/>
                        <span className="text-sm">12% from last month</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl drop-shadow-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500 text-sm">Total Orders</p>
                            <h3 className="text-2xl font-bold text-[#04345c]">{orders.length}</h3>
                        </div>
                        <div className="p-3 bg-blue-100 rounded-full">
                            <ShoppingBag className="w-6 h-6 text-blue-600"/>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-yellow-600">
                        <ChevronDown className="w-4 h-4"/>
                        <span className="text-sm">{pendingOrders} pending orders</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl drop-shadow-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500 text-sm">Total Products</p>
                            <h3 className="text-2xl font-bold text-[#04345c]">{products.length}</h3>
                        </div>
                        <div className="p-3 bg-purple-100 rounded-full">
                            <BookOpen className="w-6 h-6 text-purple-600"/>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-red-600">
                        <ChevronDown className="w-4 h-4"/>
                        <span className="text-sm">{outOfStockProducts} out of stock</span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-3xl drop-shadow-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500 text-sm">Total Users</p>
                            <h3 className="text-2xl font-bold text-[#04345c]">{users.length}</h3>
                        </div>
                        <div className="p-3 bg-orange-100 rounded-full">
                            <Users className="w-6 h-6 text-orange-600"/>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-green-600">
                        <ChevronUp className="w-4 h-4"/>
                        <span className="text-sm">{activeUsers} active users</span>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-3xl drop-shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-[#04345c]">Recent Orders</h2>
                        <Link to="/dashboard/allorders" className="text-sm text-blue-600 hover:underline">View
                            All</Link>
                    </div>
                    <div className="space-y-4">
                        {recentOrders.map((order: any) => (
                            <div key={order._id}
                                 className="flex justify-between border border-slate-200 drop-shadow-md transition duration-300 items-center p-3 hover:bg-gray-50 rounded-xl">
                                <div>
                                    <p className="font-medium">{order.user.name}</p>
                                    <p className="text-sm text-gray-500">{order.user.email}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">${order.totalPrice}</p>
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

                <div className="bg-white p-6 rounded-3xl drop-shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-[#04345c]">Top Products</h2>
                        <Link to="/dashboard/allProducts" className="text-sm text-blue-600 hover:underline">View
                            All</Link>
                    </div>
                    <div className="space-y-4">
                        {topProducts.map((product) => (
                            <div key={product._id}
                                 className="flex items-center  border border-slate-200 drop-shadow-md transition duration-300  gap-4 p-3 hover:bg-gray-50 rounded-xl">
                                <img src={product.image} alt={product.title}
                                     className="w-12 h-12 object-cover rounded-lg"/>
                                <div className="flex-1">
                                    <p className="font-medium">{product.title}</p>
                                    <p className="text-sm text-gray-500">{product.author}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium">${product.price}</p>
                                    <div className="flex items-center gap-1">
                                        <TrendingUp className="w-4 h-4 text-green-600"/>
                                        <span className="text-sm text-green-600">{product.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
};

export default AdminDashboard;