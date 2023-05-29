import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages";
import SignInPage from "../pages/authentication/sign-in";
import SignUpPage from "../pages/authentication/sign-up";
import EcommerceProductsPage from "../pages/admin/products";
import UserListPage from "../pages/users/list";
import { useDispatch } from "react-redux";
import { addCategories, addProducts, unload } from "../api/features/product";
import axios from "axios";
import { Toaster } from "react-hot-toast";

const Main: FC = function () {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    axios
      .get("https://partytorten-backend.vercel.app/category")
      .then((response) => {
        dispatch(addCategories(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    axios
      .get("https://partytorten-backend.vercel.app/products")
      .then((response) => {
        dispatch(addProducts(response.data));
        dispatch(unload());
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<DashboardPage />} index />
        <Route path="/authentication/sign-in" element={<SignInPage />} />
        <Route path="/authentication/sign-up" element={<SignUpPage />} />
        <Route
          path="/admin/products"
          element={<EcommerceProductsPage />}
        />
        <Route path="/users/list" element={<UserListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
