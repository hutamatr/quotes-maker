import React from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import CreateQuotes from "./pages/CreateQuotes";
import NotFound from "./pages/NotFound";
import QuotesDetails from "./pages/QuotesDetails";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to={"all-quotes"} />} />
        <Route path="create-quotes" element={<CreateQuotes />} />
        <Route path="all-quotes" element={<AllQuotes />} />
        <Route path="all-quotes/:quotesId" element={<QuotesDetails />}>
          <Route
            path={""}
            element={
              <div className="quotes-details--center">
                <Link to={"comments"}>Load Comment</Link>
              </div>
            }
          />
          <Route path={"comments"} element={<Comments />} />
        </Route>
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
