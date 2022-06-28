import React from "react";
import { motion } from "framer-motion";

import { animationDown } from "../components/UI/Animation";

import "../scss/not-found.scss";

const NotFound = () => {
  return (
    <motion.p
      className="not-found"
      variants={animationDown}
      initial="hidden"
      animate="visible"
    >
      Page Not Found!
    </motion.p>
  );
};

export default NotFound;
