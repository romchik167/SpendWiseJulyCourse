import "./App.css";
import BalanceSection from "./components/BalanceSection/BalanceSection"
import MainPage from "./pages/MainPage/MainPage";
import Navigation from "./components/NavigationSection/NavigationSection";
import { BrowserRouter, Route, Routes } from "react-router";
import WalletPage from "./pages/WalletPage/WalletPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LoginForm from "./pages/LoginPage/LoginForm";
import RegisterForm from "./pages/LoginPage/RegisterForm";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="wrap">
          <div className="grid-item-app">
            <Navigation />
          </div>
          <div className="grid-item-app">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/walletPage" element={<WalletPage />} />
              <Route path="/loginForm" element={<LoginForm />} />
              <Route path="/registerForm" element={<RegisterForm />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
          <div className="grid-item-app">
            <BalanceSection />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
