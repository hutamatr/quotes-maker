import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Create from "./pages/CreateQuotes";
import AllQuotes from "./pages/AllQuotes";
import QuotesDetails from "./pages/DetailsQuotes";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/all-quotes" />
        </Route>
        <Route path="/create-quotes">
          <Create />
        </Route>
        <Route path="/all-quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/all-quotes/:quotesId">
          <QuotesDetails />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
