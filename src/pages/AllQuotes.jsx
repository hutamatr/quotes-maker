import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../components/UI/Button";
import QuotesList from "../components/Quotes/AllQuotesList";
import QuotesContext from "../store/quotes-context";
import { animationDown } from "../components/UI/Animation";

import "../scss/all-quotes.scss";

const AllQuotes = () => {
  const { removeQuotes, viewQuotes, quotesList } = useContext(QuotesContext);

  const deleteQuotesHandler = (id) => {
    removeQuotes(id);
  };

  const viewQuotesHandler = (id) => {
    viewQuotes(id);
  };

  const quotesListContent = quotesList.map((quotes) => {
    return (
      <QuotesList
        key={quotes.id}
        id={quotes.id}
        quotes={quotes.quotes}
        author={quotes.author}
        onViewQuotes={viewQuotesHandler}
        onDeleteQuotes={deleteQuotesHandler}
      />
    );
  });

  return (
    <section className="all-quotes">
      {quotesList.length === 0 ? (
        <motion.div
          className="all-quotes__wrap"
          variants={animationDown}
          initial="hidden"
          animate="visible"
          transition="visible"
        >
          <h1 className="all-quotes__empty">Quotes Empty, create one?</h1>
          <Link to="/create-quotes">
            <Button type={"button"}>Create</Button>
          </Link>
        </motion.div>
      ) : (
        quotesListContent
      )}
    </section>
  );
};

export default AllQuotes;
