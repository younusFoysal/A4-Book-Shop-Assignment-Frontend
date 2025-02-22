import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {AlignJustify, BookPlus, LibraryBig, ShoppingBag, Users} from "lucide-react";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setActive(!isActive);
  };

  const isCurrentPath = (path) => {
    return location.pathname.startsWith(path)
        ? "bg-[#04345c] text-white font-semibold hover:text-white hover:bg-[#048ed6]"
        : "relative overflow-hidden border-[#04345c] text-[#04345c] hover:text-white before:absolute before:inset-0 before:bg-[#04345c] before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 hover:text-white";
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // Add actual logout logic here (e.g., clear localStorage, API call)
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
            className={`z-10 fixed md:relative flex flex-col items-center w-56 h-full overflow-hidden text-gray-700 bg-gray-100 rounded-r-3xl transition-all duration-300 ${
                isActive ? "left-0" : "left-[-100%] md:left-0"
            }`}
        >
          <Link to="/" className="flex gap-2 items-center w-full px-3 mt-3">
            <img src="/logo.png" alt="logo" width="30" height="30" />
            <p className="text-black font-semibold text-lg">Books Hub</p>
          </Link>

          <div className="w-full px-2">
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
              <Link
                  to="/dashboard/add-product"
                  className={`flex items-center w-full h-12 px-3 mt-2 rounded-xl ${isCurrentPath(
                      "/dashboard/add-product"
                  )}`}
              >
                <BookPlus className="w-6 h-6 stroke-current z-50" />
                <span className="ml-2 text-sm font-medium z-50">Add Book</span>
              </Link>

              <Link
                  to="/dashboard/allProducts"
                  className={`flex items-center w-full h-12 px-3 mt-2 rounded-xl ${isCurrentPath(
                      "/dashboard/allProducts"
                  )}`}
              >
                <LibraryBig className="w-6 h-6 stroke-current z-50" />
                <span className="ml-2 text-sm font-medium z-50">All Books</span>
              </Link>

              <Link
                  to="/dashboard/allorders"
                  className={`flex items-center w-full h-12 px-3 mt-2 rounded-xl ${isCurrentPath(
                      "/dashboard/allorders"
                  )}`}
              >
                <ShoppingBag className="w-6 h-6 stroke-current z-50" />
                <span className="ml-2 text-sm font-medium z-50">All Orders</span>
              </Link>

              <Link
                  to="/dashboard/allusers"
                  className={`flex items-center w-full h-12 px-3 mt-2 rounded-xl ${isCurrentPath(
                      "/dashboard/allusers"
                  )}`}
              >
                <Users className="w-6 h-6 stroke-current z-50" />
                <span className="ml-2 text-sm font-medium z-50">All Users</span>
              </Link>
            </div>
          </div>

          <button
              onClick={handleLogout}
              className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300"
          >
            <svg
                className="w-6 h-6 stroke-current z-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="ml-2 text-sm font-medium z-50">Logout</span>
          </button>
        </div>
      </>
  );
};

export default Sidebar;
