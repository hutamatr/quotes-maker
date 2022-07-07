import React, { forwardRef } from "react";

import "../../scss/card.scss";

const Card = forwardRef(({ className, children }, ref) => {
  return (
    <section className={`card ${className}`} ref={ref}>
      {children}
    </section>
  );
});

export default Card;
