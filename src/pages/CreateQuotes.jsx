import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import Card from "../components/UI/Card";
import Loading from "../components/UI/Loading";
import CreateQuoteForm from "../components/Quotes/CreateQuoteForm";
import useAxios from "../hooks/use-axios";
import { createQuotes } from "../lib/API";

import "../scss/create-quotes.scss";

const CreateQuotes = () => {
  const [quotesInput, setQuotesInput] = useState({
    author: "",
    quotes: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { sendRequest: createRequest, status: createStatus } =
    useAxios(createQuotes);

  useEffect(() => {
    if (createStatus === "completed") {
      setTimeout(() => {
        setIsLoading(false);
        navigate(-1);
      }, 1500);
    }
  }, [navigate, createStatus]);

  const date = moment().format("dddd MMMM DD YYYY, h:mm:ss a");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (quotesInput.quotes.length === 0 || quotesInput.author.length === 0) {
      return;
    }
    setIsLoading(true);

    const newQuotes = {
      date,
      ...quotesInput,
    };
    createRequest(newQuotes);

    setQuotesInput({
      author: "",
      quotes: "",
    });
  };

  const quotesChangeHandler = (event) => {
    setQuotesInput((prevState) => {
      return { ...prevState, quotes: event.target.value };
    });
  };

  const authorChangeHandler = (event) => {
    setQuotesInput((prevState) => {
      return { ...prevState, author: event.target.value };
    });
  };

  return (
    <div className="create">
      <Card className={"create__card"}>
        {isLoading ? (
          <Loading />
        ) : (
          <CreateQuoteForm
            onFormSubmit={formSubmitHandler}
            onAuthorChange={authorChangeHandler}
            onQuotesChange={quotesChangeHandler}
            onQuotesInput={quotesInput}
          />
        )}
      </Card>
    </div>
  );
};

export default CreateQuotes;
