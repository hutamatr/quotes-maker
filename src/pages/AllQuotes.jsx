import React, { Fragment, useEffect, useState } from "react";

import QuotesList from "../components/Quotes/AllQuotesList";
import QuotesEmpty from "../components/Quotes/QuotesEmpty";

import useAxios from "../hooks/use-axios";
import { getAllQuotes, putQuotes } from "../lib/API";
import Loading from "../components/UI/Loading";

import "../scss/all-quotes.scss";

const AllQuotes = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    sendRequest: getRequest,
    status: getStatus,
    data: getQuotesData,
    error: getError,
  } = useAxios(getAllQuotes, true);

  const { sendRequest: putRequest, status: putStatus } = useAxios(putQuotes);

  useEffect(() => {
    getRequest();
    if (putStatus === "completed") {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [getRequest, putStatus]);

  const deleteQuotesHandler = (id) => {
    setIsLoading(true);
    const quotesFilter = getQuotesData.filter((item) => {
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

    putRequest(newQuotes);
  };

  if (getStatus === "pending" || putStatus === "pending") {
    return <Fragment>{isLoading && <Loading />}</Fragment>;
  }

  if (getError) {
    return <p className="all-quotes--error">{getError}</p>;
  }

  return (
    <section className="all-quotes">
      {(getStatus === "completed" && !getQuotesData) ||
      getQuotesData.length === 0 ? (
        <Fragment>
          <QuotesEmpty />
        </Fragment>
      ) : (
        <QuotesList
          quotesList={getQuotesData}
          onDeleteQuotes={deleteQuotesHandler}
        />
      )}
    </section>
  );
};

export default AllQuotes;
