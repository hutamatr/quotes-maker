import React, { Fragment } from "react";

import Navigation from "../Navigation/Navigation";

const layout = ({ children }) => {
  return (
    <Fragment>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </Fragment>
  );
};

export default layout;
