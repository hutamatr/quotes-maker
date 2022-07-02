import React, { useContext, useEffect } from "react";

import QuotesList from "../components/Quotes/AllQuotesList";
import QuotesEmpty from "../components/Quotes/QuotesEmpty";
import QuotesContext from "../store/quotes-context";
import useAxios from "../hooks/use-axios";
import { getAllQuotes } from "../lib/API";
import Loading from "../components/UI/Loading";

import "../scss/all-quotes.scss";

const AllQuotes = () => {
  const { removeQuotes, viewQuotes, quotesList } = useContext(QuotesContext);

  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useAxios(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const deleteQuotesHandler = (id) => {
    removeQuotes(id);
  };

  const viewQuotesHandler = (id) => {
    viewQuotes(id);
  };

  if (status === "pending") {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="all-quotes">
      {(status === "completed" && !loadedQuotes) ||
      loadedQuotes.length === 0 ? (
        <QuotesEmpty />
      ) : (
        <QuotesList
          quotesList={loadedQuotes}
          onViewQuotes={viewQuotesHandler}
          onDeleteQuotes={deleteQuotesHandler}
        />
      )}
    </section>
  );
};

export default AllQuotes;
