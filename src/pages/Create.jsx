import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "../components/UI/Card";
import Loading from "../components/UI/Loading";
import QuotesContext from "../store/quotes-context";
import "../scss/create.scss";

const Create = () => {
  const [quotesInput, setQuotesInput] = useState({
    author: "",
    quotes: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(QuotesContext);

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
    context.addQuotes(newQuotes);

    setQuotesInput({
      author: "",
      quotes: "",
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
    <section className="create">
      <Card>
        {isLoading ? (
          <Loading />
        ) : (
          <form onSubmit={formSubmitHandler} className="create__input">
            <label htmlFor="author">Author :</label>
            <input
              type="text"
              id="author"
              onChange={authorChangeHandler}
              value={quotesInput.author}
            />
            <label htmlFor="quotes">Quotes :</label>
            <textarea
              name="quotes"
              id="quotes"
              cols="10"
              rows="5"
              value={quotesInput.quotes}
              onChange={quotesChangeHandler}
            />
            <button className="create__button">Submit</button>
          </form>
        )}
      </Card>
    </section>
  );
};

export default Create;
