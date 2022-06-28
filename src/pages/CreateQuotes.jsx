import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "../components/UI/Card";
import Loading from "../components/UI/Loading";
import Button from "../components/UI/Button";
import QuotesContext from "../store/quotes-context";

import "../scss/create-quotes.scss";

const Create = () => {
  const [quotesInput, setQuotesInput] = useState({
    author: "",
    quotes: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { addQuotes } = useContext(QuotesContext);

  const id = uuidv4();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (quotesInput.quotes.length === 0 || quotesInput.author.length === 0) {
      return;
    }
    setIsLoading(true);

    const newQuotes = {
      ...quotesInput,
      id,
    };
    addQuotes(newQuotes);

    setQuotesInput({
      author: "",
      quotes: "",
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
          <form onSubmit={formSubmitHandler} className="create__form">
            <label htmlFor="author" className="create__label">
              Author :
            </label>
            <input
              type="text"
              id="author"
              onChange={authorChangeHandler}
              value={quotesInput.author}
            />
            <label htmlFor="quotes" className="create__label">
              Quotes :
            </label>
            <textarea
              name="quotes"
              id="quotes"
              cols="10"
              rows="5"
              value={quotesInput.quotes}
              onChange={quotesChangeHandler}
            />

            <Button>Submit</Button>
          </form>
        )}
      </Card>
    </div>
  );
};

export default Create;
