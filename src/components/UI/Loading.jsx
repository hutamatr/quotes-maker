import React from "react";

import "../../scss/loading.scss";

const loading = () => {
  return (
    <div className="loading">
      <div className="loading__wrapper">
        <div className="loading__line"></div>
        <div className="loading__line"></div>
        <div className="loading__line"></div>
      </div>
    </div>
  );
};

export default loading;
