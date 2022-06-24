import React from "react";

import "../../scss/button.scss";

const Button = ({ children, type, className, onClick }) => {
  return (
    <button
      type={type ? type : ""}
      className={`button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
