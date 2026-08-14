import { Outlet } from "react-router";
import Navigation from '../../components/sections/NavigationSection/NavigationSection';
import BalanceSection from '../../components/sections/BalanceSection/BalanceSection';
export default function MainLayout() {
  return (
      <div className="container">
        <div className="wrap">
          <div className="grid-item-app">
            <Navigation />
          </div>
          <div className="grid-item-app">
            <Outlet />
          </div>
          <div className="grid-item-app">
            <BalanceSection />
          </div>
        </div>
      </div>
  );
}