import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "../pages/MainPage/MainPage";
import WalletPage from "../pages/WalletPage/WalletPage";
import LoginForm from "../features/auth/LoginForm/LoginForm";
import RegisterForm from "../features/auth/RegisterForm/RegisterForm";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layouts/MainLayout/MainLayout";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/walletPage" element={<WalletPage />} />
          </Route>

          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/registerForm" element={<RegisterForm />} />
          
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
