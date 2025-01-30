import { useState } from "react";
import i18n from "i18next";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";
import Home from "./pages/Home/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
//import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import CategoryDetails from "./pages/CategoryDetails/CategoryDetails";
import Categories from "./pages/Categories/Categories";
import MyCart from "./pages/MyCart/MyCart";
//import ProtectedRoute from "@components/shared/ProtectedRoute/ProtectedRoute";
import LayoutProtectedRoute from "@components/shared/ProtectedRoute/LayoutProtectedRoute";
import NotFound from "./pages/NotFound/NotFound";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  document.documentElement.lang = i18n.language;

  const [loginData, setLoginData] = useState(null);

  const saveLoginData = () => {
    const encodedToken = localStorage.getItem("userToken");
    const decodedToken = jwtDecode(encodedToken);
    setLoginData(decodedToken);
    console.log(decodedToken);
  };

  const routes = createBrowserRouter([
    {
      path: "/auth",
      element: (
        <LayoutProtectedRoute >
          <AuthLayout loginData={loginData} />
        </LayoutProtectedRoute>
      ),
      //<AuthLayout /> ,
      children: [
        { index: true, element: <Login saveLoginData={saveLoginData} /> },
        { path: "login", element: <Login saveLoginData={saveLoginData} /> },
        { path: "register", element: <Register /> },
        { path: "forget-pass", element: <ForgetPassword /> },
        { path: "reset-pass", element: <ResetPassword /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "/",
      element: (
        // <ProtectedRoute >
        //   <BaseLayout loginData={loginData} />
        // </ProtectedRoute>
        <BaseLayout loginData={loginData} />
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "all-products", element: <AllProducts /> },
        { path: "product-details/:_id", element: <ProductDetails /> },
        { path: "category-details/:_id", element: <CategoryDetails /> },
        //{ path: "cart", element: <Cart /> },
        { path: "cart", element: <MyCart /> },
        { path: "categories", element: <Categories /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
};

export default App;
