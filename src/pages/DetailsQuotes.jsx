import React, { useEffect } from "react";
import { Route, useParams, useRouteMatch, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Card from "../components/UI/Card";
import Comments from "../components/Comments/Comments";
import Loading from "../components/UI/Loading";
import { animationDown } from "../components/UI/Animation";
import useAxios from "../hooks/use-axios";
import { getSingleQuote } from "../lib/API";

import "../scss/quotes-details.scss";

const QuotesDetails = () => {
  const { quotesId } = useParams();

  const {
    sendRequest: singleQuoteRequest,
    data: singleQuoteData,
    status: singleQuoteStatus,
    error: singleQuoteError,
  } = useAxios(getSingleQuote, true);

  useEffect(() => {
    singleQuoteRequest(quotesId);
  }, [singleQuoteRequest, quotesId]);

  const { path, url } = useRouteMatch();

  // const quotes = quotesList.find((item) => item.id === quotesId);

  if (singleQuoteStatus === "pending") {
    return <Loading />;
  }

  if (singleQuoteError) {
    return <p className="quotes-details--error">{singleQuoteError}</p>;
  }
  if (!singleQuoteData.quotes) {
    return (
      <motion.span
        className="quotes-details--no-found"
        variants={animationDown}
        initial="hidden"
        animate="visible"
      >
        No Quotes Found!
      </motion.span>
    );
  }

  return (
    <section className="quotes-details">
      <Card className={"quotes-details__card"}>
        <div className="quotes-details__wrapper">
          <p>"{singleQuoteData.quotes}"</p>
          <span>- {singleQuoteData.author}</span>
        </div>
      </Card>
      <Route path={path} exact>
        <div className="quotes-details--center">
          <Link to={`${url}/comments`}>Load Comment</Link>
        </div>
      </Route>
      <Route path={`${path}/comments`}>
        <Comments quotesId={quotesId} />
      </Route>
    </section>
  );
};

export default QuotesDetails;
