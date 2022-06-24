import React from "react";
import { NavLink } from "react-router-dom";

import "../../scss/navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__title">
        <h1>
          <span className="nav__title--font">"Quotes"</span>Maker.
        </h1>
      </div>
      <ul className="nav__links">
        <li className="nav__link">
          <NavLink activeClassName="active" to={"/all-quotes"}>
            All Quotes
          </NavLink>
        </li>
        <li className="nav__link">
          <NavLink activeClassName="active" to={"/create"}>
            Create Quotes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
