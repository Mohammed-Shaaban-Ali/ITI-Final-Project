import { Link, useLocation } from "react-router-dom";
import "./PageDirection.css";

export default function PageDirection() {
  const location = useLocation();
  return (
    <div
      className={`pageDirection ${
        location.pathname === "/products" ? "" : "activePageDescription"
      }`}
    >
      <Link to={"/"} className="activeDescription">
        Home
      </Link>
      <p className="activeDescription"> &gt;</p>
      <Link to={"/products"} className="activeDescription">
        {" "}
        Featured store
      </Link>
      <p className="activeDescription"> &gt;</p>
      <p
        className={`${
          location.pathname === "/products" ? "" : "activeDescription"
        }`}
      >
        {" "}
        Product detail
      </p>
    </div>
  );
}
