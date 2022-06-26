import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { animationDown } from "../UI/Animation";

import "../../scss/navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <motion.div
        className="nav__title"
        variants={animationDown}
        initial="hidden"
        animate="visible"
        transition="visible"
      >
        <h1>
          <span className="nav__title--font">"Quotes"</span>Maker.
        </h1>
      </motion.div>
      <motion.ul
        className="nav__links"
        variants={animationDown}
        initial="hidden"
        animate="visible"
        transition="visible"
      >
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
        {/* <li className="nav__link">
          <NavLink activeClassName="active" to={"/quotes-details"}>
            Quotes Details
          </NavLink>
        </li> */}
      </motion.ul>
    </nav>
  );
};

export default Navbar;
