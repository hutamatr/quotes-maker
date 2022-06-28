import React, { useContext } from "react";
import { Route, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Card from "../components/UI/Card";
import Comments from "../components/Comments/Comments";
import QuotesContext from "../store/quotes-context";
import { animationDown } from "../components/UI/Animation";

import "../scss/quotes-details.scss";

const QuotesDetails = () => {
  const { quotesView } = useContext(QuotesContext);

  const { quotesId } = useParams();

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
      <Route path={`/all-quotes/${quotesId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuotesDetails;
