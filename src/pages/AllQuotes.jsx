import React, { useContext } from "react";

import QuotesList from "../components/Quotes/AllQuotesList";
import QuotesEmpty from "../components/Quotes/QuotesEmpty";
import QuotesContext from "../store/quotes-context";

import "../scss/all-quotes.scss";

const AllQuotes = () => {
  const { removeQuotes, viewQuotes, quotesList } = useContext(QuotesContext);

  const deleteQuotesHandler = (id) => {
    removeQuotes(id);
  };

  const viewQuotesHandler = (id) => {
    viewQuotes(id);
  };

  return (
    <section className="all-quotes">
      {quotesList.length === 0 ? (
        <QuotesEmpty />
      ) : (
        <QuotesList
          quotesList={quotesList}
          onViewQuotes={viewQuotesHandler}
          onDeleteQuotes={deleteQuotesHandler}
        />
      )}
    </section>
  );
};

export default AllQuotes;
