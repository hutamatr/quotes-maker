import React from "react";

import "../../scss/card.scss";

const Card = ({ className, children }) => {
  return <section className={`card ${className}`}>{children}</section>;
};

export default Card;
