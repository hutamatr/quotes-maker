import React, { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Create from "./pages/Create";
import AllQuotes from "./pages/AllQuotes";
import Waves from "./components/UI/Waves";

function App() {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path={"/"} exact>
            <Redirect to="/all-quotes" />
          </Route>
          <Route path={"/create"}>
            <Create />
          </Route>
          <Route path={"/all-quotes"}>
            <AllQuotes />
          </Route>
        </Switch>
      </main>
      {/*       <footer>
        <Waves />
      </footer> */}
    </Fragment>
  );
}

export default App;
