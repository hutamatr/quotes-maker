import React, { useContext } from "react";
import { motion } from "framer-motion";

import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import QuotesContext from "../store/quotes-context";
import { animationDown } from "../components/UI/Animation";

import "../scss/all-quotes.scss";

const AllQuotes = () => {
  const context = useContext(QuotesContext);

  const deleteQuotesHandler = (id) => {
    context.removeQuotes(id);
  };

  const viewQuotesHandler = (id) => {
    context.viewQuotes(id);
  };

  const quotesListContent = context.quotesList.map((quotes) => {
    return (
      <Card key={quotes.id}>
        <li className="all-quotes__link">
          <div className="all-quotes__content">
            <h2>"{quotes.quotes}"</h2>
            <span>- {quotes.author}</span>
          </div>
          <div className="all-quotes__button">
            <Button onClick={viewQuotesHandler.bind(this, quotes.id)}>
              View
            </Button>
            <Button onClick={deleteQuotesHandler.bind(this, quotes.id)}>
              Delete
            </Button>
          </div>
        </li>
      </Card>
    );
  });

  return (
    <section className="all-quotes">
      <ul>
        {context.quotesList.length === 0 ? (
          <motion.div
            className="all-quotes__wrap"
            variants={animationDown}
            initial="hidden"
            animate="visible"
            transition="visible"
          >
            <h1 className="all-quotes__empty">Quotes Empty, create one?</h1>
            <Button type={"button"}>Create</Button>
          </motion.div>
        ) : (
          quotesListContent
        )}
      </ul>
    </section>
  );
};

export default AllQuotes;
