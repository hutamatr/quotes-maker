import React, { useContext } from "react";
import { Route, useParams, useRouteMatch, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Card from "../components/UI/Card";
import Comments from "../components/Comments/Comments";
import QuotesContext from "../store/quotes-context";
import { animationDown } from "../components/UI/Animation";

import "../scss/quotes-details.scss";

const QuotesDetails = () => {
  const { quotesView } = useContext(QuotesContext);

  const { quotesId } = useParams();

  const { path, url } = useRouteMatch();

  // const quotes = quotesList.find((item) => item.id === quotesId);

  if (quotesView.id !== quotesId) {
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
          <p>"{quotesView.quotes}"</p>
          <span>- {quotesView.author}</span>
        </div>
      </Card>
      <Route path={path} exact>
        <div className="quotes-details--center">
          <Link to={`${url}/comments`}>Load Comment</Link>
        </div>
      </Route>
      <Route path={`${path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuotesDetails;
