import { Link } from "react-router";
import "./componentsCSS/Navigation.css";
export default function Navigation() {
  return (
    <>
      <div className="nav-list">
        <Link to={"/"}><h2>Main</h2></Link>
        <Link to={"walletPage"}><h2>Wallet</h2></Link>
      </div>
    </>
  );
}
