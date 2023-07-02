import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Auth from "../pages/auth";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages";
import AllBanks from "../pages/all_banks";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route element={<Auth />}>
          <Route index path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot_password" element={<ForgotPassword />} />
        </Route>
      </Route>
      <Route path="banks" element={<AllBanks />} />
    </Routes>
  );
};

export default AppRoutes;
