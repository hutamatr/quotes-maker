import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Card from "../components/UI/Card";
import Loading from "../components/UI/Loading";
import CreateQuoteForm from "../components/Quotes/CreateQuoteForm";
// import QuotesContext from "../store/quotes-context";
import useAxios from "../hooks/use-axios";
import { createQuotes } from "../lib/API";

import "../scss/create-quotes.scss";

const CreateQuotes = () => {
  const [quotesInput, setQuotesInput] = useState({
    author: "",
    quotes: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const { sendRequest, status } = useAxios(createQuotes);

  useEffect(() => {
    if (status === "completed") {
      setTimeout(() => {
        setIsLoading(false);
        history.push("/all-quotes");
      }, 1500);
    }
  }, [history, status]);

  // const { addQuotes } = useContext(QuotesContext);

  const id = uuidv4();

  const date = new Date().toLocaleString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    second: "2-digit",
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (quotesInput.quotes.length === 0 || quotesInput.author.length === 0) {
      return;
    }
    setIsLoading(true);

    const newQuotes = {
      id,
      date,
      ...quotesInput,
    };
    // addQuotes(newQuotes);
    sendRequest(newQuotes);

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
