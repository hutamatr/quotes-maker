import React, { useEffect, useRef } from "react";
import { Outlet, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { exportToPNG } from "../components/UI/ExportToPNG";
import Card from "../components/UI/Card";
import Loading from "../components/UI/Loading";
import Button from "../components/UI/Button";
import { animationDown } from "../components/UI/Animation";
import useAxios from "../hooks/use-axios";
import { getSingleQuote } from "../lib/API";

import "../scss/quotes-details.scss";

const QuotesDetails = () => {
  const { quotesId } = useParams();

  const ref = useRef();

  const {
    sendRequest: singleQuoteRequest,
    data: singleQuoteData,
    status: singleQuoteStatus,
    error: singleQuoteError,
  } = useAxios(getSingleQuote, true);

  useEffect(() => {
    singleQuoteRequest(quotesId);
  }, [singleQuoteRequest, quotesId]);

  const downloadQuotesHandler = () => {
    exportToPNG(ref.current, quotesId);
  };

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
      <div style={{ padding: ".5rem" }} ref={ref}>
        <Card className={"quotes-details__card"}>
          <div className="quotes-details__wrapper">
            <p>"{singleQuoteData.quotes}"</p>
            <span>- {singleQuoteData.author}</span>
          </div>
        </Card>
      </div>
      <Button
        className={"quotes-details__button"}
        onClick={downloadQuotesHandler}
      >
        Download
      </Button>
      <Outlet />
    </section>
  );
};

export default QuotesDetails;
