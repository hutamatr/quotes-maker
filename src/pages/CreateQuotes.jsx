import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Card from "../components/UI/Card";
import Loading from "../components/UI/Loading";
import CreateQuoteForm from "../components/Quotes/CreateQuoteForm";
import QuotesContext from "../store/quotes-context";

import "../scss/create-quotes.scss";

const CreateQuotes = () => {
  const [quotesInput, setQuotesInput] = useState({
    author: "",
    quotes: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { addQuotes } = useContext(QuotesContext);

  const history = useHistory();

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
      ...quotesInput,
      id,
      date,
    };
    addQuotes(newQuotes);

    setQuotesInput({
      author: "",
      quotes: "",
    });
    setTimeout(() => {
      setIsLoading(false);
      history.push("/all-quotes");
    }, 1200);
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
