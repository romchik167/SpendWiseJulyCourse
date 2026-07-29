import "./App.css";
import BalanceSection from "./components/BalanceSection";
import MainPage from "./pages/MainPage";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router";
import WalletPage from "./pages/WalletPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="wrap">
          <div className="grid-item">
            <Navigation />
          </div>
          <div className="grid-item">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/walletPage" element={<WalletPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
          <div className="grid-item">
            <BalanceSection />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
