import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import CreateQuotes from "./pages/CreateQuotes";
import AllQuotes from "./pages/AllQuotes";
import NotFound from "./pages/NotFound";
import QuotesDetails from "./pages/DetailsQuotes";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/all-quotes" />
        </Route>
        <Route path="/create-quotes">
          <CreateQuotes />
        </Route>
        <Route path="/all-quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/all-quotes/:quotesId">
          <QuotesDetails />
        </Route>
        <Route path={"*"}>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
