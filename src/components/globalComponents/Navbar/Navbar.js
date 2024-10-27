import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";

import "./Navbar.scss";
const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="content nav">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" width={"50px"} height={"50px"} />
            </Link>
          </div>
          <div className="links">
            <NavLink to="/">Home</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
