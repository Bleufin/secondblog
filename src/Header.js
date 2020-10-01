import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <div id="myHeader" className="header">
      <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "20px", fontWeight: "400" }}>
        Home
      </Link>

      <div className="header__icons">Icons</div>
      <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="" />
    </div>
  );
}

export default Header;
