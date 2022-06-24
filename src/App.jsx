import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Create from "./pages/Create";
import AllQuotes from "./pages/AllQuotes";

function App() {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Route path={"/create"}>
          <Create />
        </Route>
        <Route path={"/all-quotes"}>
          <AllQuotes />
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
