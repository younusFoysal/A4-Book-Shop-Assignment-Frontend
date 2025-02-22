import Sidebar from "@/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen md:flex relative">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
