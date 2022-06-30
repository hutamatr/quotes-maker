import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../UI/Button";

import { animationDown } from "../UI/Animation";

const QuotesEmpty = () => {
  return (
    <motion.div
      className="all-quotes__wrap"
      variants={animationDown}
      initial="hidden"
      animate="visible"
      transition="visible"
    >
      <h1 className="all-quotes__empty">Quotes Empty, create one?</h1>
      <Link to="/create-quotes">
        <Button type={"button"}>Create</Button>
      </Link>
    </motion.div>
  );
};

export default QuotesEmpty;
