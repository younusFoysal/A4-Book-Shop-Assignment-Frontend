import App from "@/App";
import SingleProduct from "@/components/product/SingleProduct";
import DashboardLayout from "@/layout/DashboardLayout";
import Layout from "@/layout/Layout";
import AllProducts from "@/pages/AllProducts";
import Checkoutpage from "@/pages/Checkoutpage";
import AddProduct from "@/pages/dashboard/AddProduct";
import AdminAllProduct from "@/pages/dashboard/AdminAllProduct";
import Dashboard from "@/pages/dashboard/Dashboard";
import UpdateProductForm from "@/pages/dashboard/UpdateProductForm";
import Login from "@/pages/Login";
import Register from "@/pages/SignUp";
import { createBrowserRouter } from "react-router-dom";
import Alluser from "@/pages/dashboard/AllUser.tsx";
import Allorder from "@/pages/dashboard/Allorder.tsx";
import Profile from "@/pages/dashboard/Profile.tsx";
import PrivateRoute from "@/router/PrivateRoute.tsx";

import ContactUs from "@/components/home/ContactUs.tsx";
import AboutUs from "@/components/home/AboutUs.tsx";
import ErPage from "@/components/partials/ErPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "/allProducts", element: <AllProducts /> },
      { path: "/products/:id", element: <SingleProduct /> },
      { path: "/checkout/:id", element: <PrivateRoute><Checkoutpage /></PrivateRoute> },
      { path: "/contact", element: <ContactUs/> },
      { path: "/about", element: <AboutUs/> }
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute> ,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "update-product/:productId",
        element: <UpdateProductForm />,
      },
      {
        path: "allProducts",
        element: <AdminAllProduct />,
      },
      {
        path: "allorders",
        element: <Allorder />,
      },
      {
        path: "allusers",
        element: <Alluser />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "*",
    element: <ErPage/>,
  }
]);
