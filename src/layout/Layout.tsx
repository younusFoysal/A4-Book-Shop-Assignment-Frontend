import Footer from "@/components/partials/Footer";
import Navbar from "@/components/partials/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
        <div className=" mt-16">
            <Outlet />
        </div>
      <Footer />
    </>
  );
};

export default Layout;
