import { useState } from "react";
import { User,  Lock, Camera } from "lucide-react";
import UseUser from "@/hook/UseUser";
import {useGetUserQuery, useUpdateuserMutation} from "@/redux/features/users/userApi";
import { toast } from "sonner";

const Profile = () => {
    const userData = UseUser();
    const [activeTab, setActiveTab] = useState("profile");
    const [updateUser] = useUpdateuserMutation();
    const [isEditing, setIsEditing] = useState(false);

    const {  data: userD,  refetch } = useGetUserQuery(userData?.id);
    console.log(userD?.data);
    const user = userD?.data

    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
    });

    const [passwordForm, setPasswordForm] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            await updateUser({
                userId: userData?.id,
                updateduser: formData,
            }).unwrap();

            // Refetch user data
            refetch();

            toast.success("Profile updated successfully");
            setIsEditing(false);
        } catch (error) {
            toast.error("Failed to update profile");
        }
    };


    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        try {
            await updateUser({
                userId: userData?.id,
                updateduser: { password: passwordForm.newPassword },
            });
            toast.success("Password updated successfully");
            setPasswordForm({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
        } catch (error) {
            toast.error("Failed to update password");
        }
    };

    return (
        <div className="p-6 space-y-6">
            <div className=" gap-6">

                {/* Sidebar */}
                <div className="w-full flex gap-4 mb-4">
                    <button
                        onClick={() => setActiveTab("profile")}
                        className={`w-full p-3 rounded-xl flex items-center gap-3 ${
                            activeTab === "profile"
                                ? "bg-[#04345c] text-white"
                                : "border border-slate-100 hover:bg-gray-100"
                        }`}
                    >
                        <User size={20}/>
                        Profile Settings
                    </button>
                    <button
                        onClick={() => setActiveTab("password")}
                        className={`w-full p-3 rounded-xl flex items-center gap-3 ${
                            activeTab === "password"
                                ? "bg-[#04345c] text-white"
                                : "border border-slate-100 hover:bg-gray-100"
                        }`}
                    >
                        <Lock size={20}/>
                        Change Password
                    </button>
                </div>


                {/* Main Content */}
                <div className="flex-1 ">
                    {activeTab === "profile" ? (
                        <div className="bg-white rounded-3xl p-6 border border-slate-100 drop-shadow-lg">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-[#04345c]">Profile Settings</h2>
                                <button
                                    onClick={() => setIsEditing(!isEditing)}
                                    className="px-4 py-2 bg-[#04345c] text-white rounded-xl hover:bg-[#048ed6]"
                                >
                                    {isEditing ? "Cancel" : "Edit Profile"}
                                </button>
                            </div>

                            <div className="flex items-center gap-6 mb-8">
                                <div className="relative">
                                    <img
                                        src={user?.avatar || "https://img.freepik.com/premium-vector/avatar-icon0002_750950-43.jpg"}
                                        alt="Profile"
                                        className="w-24 h-24 rounded-full object-cover"
                                    />
                                    {isEditing && (
                                        <button
                                            className="absolute bottom-0 right-0 p-2 bg-[#04345c] rounded-full text-white">
                                            <Camera size={16}/>
                                        </button>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{user?.name}</h3>
                                    <p className="text-gray-500">{user?.role}</p>
                                </div>
                            </div>

                            <form onSubmit={handleUpdateProfile} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            disabled={!isEditing}
                                            className="w-full p-2 border rounded-xl"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            disabled={!isEditing}
                                            className="w-full p-2 border rounded-xl"
                                        />
                                    </div>
                                    {/*<div>*/}
                                    {/*    <label className="block text-sm font-medium mb-1">Phone</label>*/}
                                    {/*    <input*/}
                                    {/*        type="tel"*/}
                                    {/*        name="phone"*/}
                                    {/*        value={formData.phone}*/}
                                    {/*        onChange={handleInputChange}*/}
                                    {/*        disabled={!isEditing}*/}
                                    {/*        className="w-full p-2 border rounded-xl"*/}
                                    {/*    />*/}
                                    {/*</div>*/}
                                    {/*<div>*/}
                                    {/*    <label className="block text-sm font-medium mb-1">Address</label>*/}
                                    {/*    <input*/}
                                    {/*        type="text"*/}
                                    {/*        name="address"*/}
                                    {/*        value={formData.address}*/}
                                    {/*        onChange={handleInputChange}*/}
                                    {/*        disabled={!isEditing}*/}
                                    {/*        className="w-full p-2 border rounded-xl"*/}
                                    {/*    />*/}
                                    {/*</div>*/}
                                </div>
                                {isEditing && (
                                    <button
                                        type="submit"
                                        className="w-full py-2 bg-[#04345c] text-white rounded-xl hover:bg-[#048ed6]"
                                    >
                                        Save Changes
                                    </button>
                                )}
                            </form>
                        </div>
                    ) : (
                        <div className="bg-white rounded-3xl p-6 border border-slate-100 drop-shadow-lg">
                            <h2 className="text-2xl font-bold text-[#04345c] mb-6">Change Password</h2>
                            <form onSubmit={handleUpdatePassword} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Current Password</label>
                                    <input
                                        type="password"
                                        name="currentPassword"
                                        value={passwordForm.currentPassword}
                                        onChange={handlePasswordChange}
                                        className="w-full p-2 border rounded-xl"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">New Password</label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        value={passwordForm.newPassword}
                                        onChange={handlePasswordChange}
                                        className="w-full p-2 border rounded-xl"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={passwordForm.confirmPassword}
                                        onChange={handlePasswordChange}
                                        className="w-full p-2 border rounded-xl"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-[#04345c] text-white rounded-xl hover:bg-[#048ed6]"
                                >
                                    Update Password
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
