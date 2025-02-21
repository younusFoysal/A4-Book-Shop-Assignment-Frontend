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
import { LoginForm } from "@/pages/Login";
import { SignUp } from "@/pages/SignUp";
import { createBrowserRouter } from "react-router-dom";
import Alluser from "@/pages/dashboard/AllUser.tsx";
import Allorder from "@/pages/dashboard/Allorder.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "/allProducts", element: <AllProducts /> },
      { path: "/products/:id", element: <SingleProduct /> },
      { path: "/checkout/:id", element: <Checkoutpage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
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
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
