
import UseUser from "@/hook/UseUser.tsx";
import AdminDashboard from "@/pages/dashboard/AdminDashboard.tsx";
import UserDashboard from "@/pages/dashboard/UserDashboard.tsx";

const Dashboard = () => {
    const user = UseUser()


    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold text-[#04345c]">Dashboard Overview</h1>

            {
                user?.role === "admin" ? <AdminDashboard/> : <UserDashboard/>
            }


        </div>
    );
};

export default Dashboard;
