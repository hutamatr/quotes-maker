import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";

import Layout from "./components/Layout/Layout";
// import Loading from "./components/UI/Loading";
import AllQuotes from "./pages/AllQuotes";
import CreateQuotes from "./pages/CreateQuotes";
import NotFound from "./pages/NotFound";
import QuotesDetails from "./pages/DetailsQuotes";
import Comments from "./components/Comments/Comments";

// const CreateQuotes = lazy(() => import("./pages/CreateQuotes"));
// const NotFound = lazy(() => import("./pages/NotFound"));
// const QuotesDetails = lazy(() => import("./pages/DetailsQuotes"));
// const Comments = lazy(() => import("./components/Comments/Comments"));

function App() {
  return (
    <Layout>
      {/* <Suspense fallback={<Loading />}> */}
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
      {/* </Suspense> */}
    </Layout>
  );
}

export default App;
