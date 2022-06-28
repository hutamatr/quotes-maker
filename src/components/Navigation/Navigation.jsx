import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { animationDown } from "../UI/Animation";

import "../../scss/navigation.scss";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
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
        </Link>
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
            <NavLink activeClassName="active" to={"/create-quotes"}>
              Create Quotes
            </NavLink>
          </li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Navbar;
