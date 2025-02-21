import { useState } from "react";

import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import MenuItems from "@/pages/dashboard/menu/Menuitems";
import { CircleUser } from "lucide-react";
import { Activity } from "lucide-react";
const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/" className="flex gap-2 items-center">
              <img src="/logo-w.png" alt="logo" width="30" height="30" />
              <p className="text-black font-semibold text-lg">Autotrader</p>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AlignJustify className="w-5 h-5" />
        </button>
      </div>
      {/* sidebar start */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-sm rounded-lg justify-center items-center  mx-auto">
              <Link to="/" className="flex gap-2 items-center">
                <img src="/logo-w.png" alt="logo" width="30" height="30" />
                <p className="text-black font-semibold text-lg">Autotrader</p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-2">
            <nav>
              <MenuItems
                icon={Activity}
                label="Add-product"
                address="add-product"
              />
              <MenuItems
                icon={Activity}
                label="All Products"
                address="allProducts"
              />
              <MenuItems
                  icon={Activity}
                  label="All Orders"
                  address="allorders"
              />
              <MenuItems
                  icon={Activity}
                  label="All users"
                  address="allusers"
              />
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <button
            onClick={() => ""}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-primary-jext   hover:text-white transition-colors duration-300 transform rounded-sm"
          >
            <CircleUser className="w-5 h-5" />
            <span className="mx-2 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
