import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "20px", fontWeight: "400" }}>
        Home
      </Link>
      <div className="header__icons">Icons</div>
      <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="" />
    </div>
  );
}

export default Header;
