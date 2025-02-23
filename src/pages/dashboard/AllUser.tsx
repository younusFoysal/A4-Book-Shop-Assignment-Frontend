import { useDeleteUserMutation, useGetAlluserQuery, useUpdateuserMutation } from "@/redux/features/users/userApi";
import { MoreVertical, Trash2, Ban, Unlock, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import moment from "moment";

const Alluser = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");

    const { data: usersResponse, isLoading, isError, refetch } = useGetAlluserQuery(
        `?search=${searchTerm}&sortBy=${sortOrder}`
    );
    const [deleteUser] = useDeleteUserMutation();
    const [updateUser] = useUpdateuserMutation();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const users = usersResponse?.data || [];

    if (isLoading) return <div className="flex justify-center items-center h-screen"><h1>Loading...</h1></div>;
    if (isError) return <div className="text-center text-red-500">Error fetching users</div>;

    const handleDeleteUser = async (id?: string) => {
        if (!id) {
            toast.error("User ID is missing");
            return;
        }
        try {
            await deleteUser(id);
            refetch();
            toast.success("User deleted successfully");
        } catch (err) {
            toast.error("Cannot delete user");
        }
    };

    const handleToggleBlock = async (id?: string, isBlocked?: boolean) => {
        if (!id) {
            toast.error("User ID is missing");
            return;
        }
        try {
            await updateUser({
                userId: id,
                updateduser: { isBlocked: !isBlocked },
            });
            refetch();
            toast.success(isBlocked ? "User unblocked successfully" : "User blocked successfully");
        } catch (err) {
            toast.error("Failed to update user status");
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#04345c]">User Management</h2>
            </div>

            <div className="mb-6 flex flex-wrap gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search users..."
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
                </select>
            </div>

            <div className="overflow-x-auto rounded-3xl drop-shadow-md">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Role</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Joined</th>
                        <th className="px-6 py-3">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-3 font-medium text-gray-900">{user.name}</td>
                            <td className="px-6 py-3">{user.email}</td>
                            <td className="px-6 py-3">{user.role}</td>
                            <td className="px-6 py-3">
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                        user.isBlocked
                                            ? 'bg-red-100 text-red-800'
                                            : 'bg-green-100 text-green-800'
                                    }`}>
                                        {user.isBlocked ? "Blocked" : "Active"}
                                    </span>
                            </td>
                            <td className="px-6 py-3">{moment(user.createdAt).format("DD MMM YYYY")}</td>
                            <td className="px-6 py-3 relative">
                                <button
                                    onClick={() => setOpenDropdown(openDropdown === user._id ? null : user._id)}
                                    className="p-2 rounded hover:bg-gray-200"
                                >
                                    <MoreVertical className="w-5 h-5" />
                                </button>

                                {openDropdown === user._id && (
                                    <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 shadow-md rounded-lg z-10"
                                         style={{
                                             bottom: openDropdown === user._id && index > users.length - 3 ? '100%' : 'auto',
                                             marginBottom: openDropdown === user._id && index > users.length - 3 ? '10px' : '0'
                                         }}
                                    >
                                        <ul className="py-2 text-sm text-gray-700">
                                            <li>
                                                <button
                                                    onClick={() => handleDeleteUser(user._id)}
                                                    className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-gray-100"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                    Delete User
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => handleToggleBlock(user._id, user.isBlocked)}
                                                    className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                                                >
                                                    {user.isBlocked ? (
                                                        <div className="text-green-500 flex gap-2 items-center">
                                                            <Unlock className="w-4 h-4" />
                                                            Unblock User
                                                        </div>
                                                    ) : (
                                                        <div className="text-red-500 flex gap-2 items-center">
                                                            <Ban className="w-4 h-4" />
                                                            Block User
                                                        </div>
                                                    )}
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;
