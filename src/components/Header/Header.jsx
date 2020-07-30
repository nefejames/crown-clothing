import React from "react";
import { Link } from "react-router-dom";

import Logo from "./crown.svg";

import "./Header.scss";

const Header = () => {
  return (
    <Header className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </Header>
  );
};

export default Header;
