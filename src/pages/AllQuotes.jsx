import React, { useContext, useEffect, useState, useCallback } from "react";

import QuotesList from "../components/Quotes/AllQuotesList";
import QuotesEmpty from "../components/Quotes/QuotesEmpty";
import QuotesContext from "../store/quotes-context";
import useAxios from "../hooks/use-axios";
import { getAllQuotes, putQuotes } from "../lib/API";
import Loading from "../components/UI/Loading";

import "../scss/all-quotes.scss";

const AllQuotes = () => {
  const [newQuotesDelete, setNewQuotesDelete] = useState([]);
  const { removeQuotes, viewQuotes } = useContext(QuotesContext);

  const {
    sendRequest,
    status,
    data: quotesData,
    error,
  } = useAxios(getAllQuotes, true);

  const { sendRequest: putRequest } = useAxios(putQuotes);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const deleteQuotesHandler = (id) => {
    const quotesFilter = quotesData.filter((item) => {
      return item.id !== id;
    });
    const newQuotes = Object.assign(
      {},
      ...quotesFilter.map((item) => ({
        [item.id]: {
          quotes: item.quotes,
          author: item.author,
          date: item.date,
        },
      }))
    );
    console.log(newQuotes);

    putRequest(newQuotes);

    // removeQuotes(id);
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
      {(status === "completed" && !quotesData) || quotesData.length === 0 ? (
        <QuotesEmpty />
      ) : (
        <QuotesList
          quotesList={quotesData}
          onViewQuotes={viewQuotesHandler}
          onDeleteQuotes={deleteQuotesHandler}
        />
      )}
    </section>
  );
};

export default AllQuotes;
