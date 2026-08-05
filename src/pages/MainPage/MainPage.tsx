import { Link } from "react-router";
import "./styles/main-page.css";
export default function MainPage() {
  return (
    <div className="Main-wrap">
      <h1>Welcome to SpendWise</h1>
      <h4>
        Managing your money just got easier. This tool helps you track every
        dollar, calculate your monthly profits, and see exactly where your money
        goes.
      </h4>
      <Link to={"walletPage"} className="button">
        add new spend
      </Link>
    </div>
  );
}
