import React, { useContext } from "react";

import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import QuotesContext from "../store/quotes-context";

import "../scss/all-quotes.scss";

const AllQuotes = () => {
  const context = useContext(QuotesContext);

  const deleteQuotesHandler = (id) => {
    context.removeQuotes(id);
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
            <Button>View</Button>
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
          <div className="all-quotes__wrap">
            <h1 className="all-quotes__empty">Quotes Empty, create one?</h1>
            <Button type={"button"}>Create</Button>
          </div>
        ) : (
          quotesListContent
        )}
      </ul>
    </section>
  );
};

export default AllQuotes;
