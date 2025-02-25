import { useState } from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {
  AlignJustify,
  BookPlus,
  CircleUserRound,
  LayoutDashboard,
  LibraryBig,
  LogOut,
  ShoppingBag,
  Users
} from "lucide-react";
import {useDispatch} from "react-redux";
import {logout} from "@/redux/features/auth/authSlice.ts";
import UseUser from "@/hook/UseUser.tsx";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = UseUser()
  console.log(user)


  const handleToggle = () => {
    setActive(!isActive);
  };

  const isCurrentPath = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === path
          ? "bg-[#04345c] text-white font-semibold hover:text-white hover:bg-[#048ed6]"
          : "relative overflow-hidden border-[#04345c] text-[#04345c] hover:text-white before:absolute before:inset-0 before:bg-[#04345c] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 hover:text-white";
    }
    return location.pathname.startsWith(path)
        ? "bg-[#04345c] text-white font-semibold hover:text-white hover:bg-[#048ed6]"
        : "relative overflow-hidden border-[#04345c] text-[#04345c] hover:text-white before:absolute before:inset-0 before:bg-[#04345c] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 hover:text-white";
  };


  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };


  return (
      <>
        {/* Mobile Toggle Button */}
        <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/" className="flex gap-2 items-center">
              <img src="/logo.png" alt="logo" width="30" height="30" />
              <p className="text-black font-semibold text-lg">Books Hub</p>
            </Link>
          </div>
          <button
              onClick={handleToggle}
              className="p-4 focus:outline-none focus:bg-gray-200"
          >
            <AlignJustify className="w-5 h-5" />
          </button>
        </div>

        {/* Main Sidebar */}
        <div
            className={`z-50 fixed md:sticky top-0 flex flex-col items-center w-56 h-screen overflow-hidden text-gray-700 bg-gray-100 rounded-r-3xl transition-all duration-300 ${
                isActive ? "left-0" : "left-[-100%] md:left-0"
            }`}
        >

          <Link to="/" className="flex gap-2 items-center w-full px-3 mt-3">
            <img src="/logo.png" alt="logo" width="30" height="30"/>
            <p className="text-black font-semibold text-lg">Books Hub</p>
          </Link>

          <div className="w-full px-2">
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
              <Link
                  to="/dashboard"
                  className={`flex items-center w-full h-12 px-3 mt-2 rounded-xl ${isCurrentPath(
                      "/dashboard"
                  )}`}
              >
                <LayoutDashboard className="w-6 h-6 stroke-current z-50" />
                <span className="ml-2 text-sm font-medium z-50">Dashboard</span>
              </Link>

              {
                user?.role === 'admin' ? (
                    <>
                        <Link
                            to="/dashboard/add-product"
                            className={`flex items-center w-full h-12 px-3 mt-2 rounded-xl ${isCurrentPath(
                                "/dashboard/add-product"
                            )}`}
                        >
                          <BookPlus className="w-6 h-6 stroke-current z-50"/>
                          <span className="ml-2 text-sm font-medium z-50">Add Book</span>
                        </Link>

                    <Link
                        to="/dashboard/allProducts"
                        className={`flex items-center w-full h-12 px-3 mt-2 rounded-xl ${isCurrentPath(
                            "/dashboard/allProducts"
                        )}`}
                    >
                      <LibraryBig className="w-6 h-6 stroke-current z-50"/>
                      <span className="ml-2 text-sm font-medium z-50">All Books</span>
                    </Link>

                <Link
                to="/dashboard/allorders"
                className={`flex items-center w-full h-12 px-3 mt-2 rounded-xl ${isCurrentPath(
                "/dashboard/allorders"
                )}`}
            >
              <ShoppingBag className="w-6 h-6 stroke-current z-50"/>
              <span className="ml-2 text-sm font-medium z-50">All Orders</span>
            </Link>

            <Link
                to="/dashboard/allusers"
                className={`flex items-center w-full h-12 px-3 mt-2 rounded-xl ${isCurrentPath(
                    "/dashboard/allusers"
                )}`}
            >
              <Users className="w-6 h-6 stroke-current z-50"/>
              <span className="ml-2 text-sm font-medium z-50">All Users</span>
            </Link>
                    </>)
                    :
            ( <>
              <Link
                  to="/dashboard/allorders"
                  className={`flex items-center w-full h-12 px-3 mt-2 rounded-xl ${isCurrentPath(
                      "/dashboard/allorders"
                  )}`}
              >
                <ShoppingBag className="w-6 h-6 stroke-current z-50"/>
                <span className="ml-2 text-sm font-medium z-50">All Orders</span>
              </Link>

            <Link
                to="/dashboard/profile"
                className={`flex items-center w-full h-12 px-3 mt-2 rounded-xl ${isCurrentPath(
                    "/dashboard/profile"
                )}`}
            >
              <CircleUserRound className="w-6 h-6 stroke-current z-50"/>
              <span className="ml-2 text-sm font-medium z-50">Profile</span>
            </Link>

            </>)
              }




            </div>
          </div>

          <button
              onClick={handleLogout}
              className="flex items-center px-6 gap-2 w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300"
          >
            <LogOut  className="w-6 h-6 stroke-current z-50" />
            <span className="ml-2 text-sm font-medium z-50">Logout</span>
          </button>
        </div>
      </>
  );
};

export default Sidebar;
