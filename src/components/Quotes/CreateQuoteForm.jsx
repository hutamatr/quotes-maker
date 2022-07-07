import React, { Fragment, useState } from "react";

import Button from "../UI/Button";

const CreateQuoteForm = ({
  onFormSubmit,
  onAuthorChange,
  onQuotesChange,
  onQuotesInput,
}) => {
  const [formIsEntering, setFormIsEntering] = useState(false);

  const buttonSubmitFocusHandler = () => {
    setFormIsEntering(false);
  };

  const focusFormHandler = () => {
    setFormIsEntering(true);
  };

  return (
    <Fragment>
      {/* <Prompt
        when={formIsEntering}
        message={
          "Are you sure leaving this page? all entering quotes will be lost"
        }
      /> */}
      <form
        onFocus={focusFormHandler}
        onSubmit={onFormSubmit}
        className="create__form"
      >
        <label htmlFor="author" className="create__label">
          Author :
        </label>
        <input
          type="text"
          id="author"
          onChange={onAuthorChange}
          value={onQuotesInput.author}
        />
        <label htmlFor="quotes" className="create__label">
          Quotes :
        </label>
        <textarea
          name="quotes"
          id="quotes"
          cols="10"
          rows="5"
          value={onQuotesInput.quotes}
          onChange={onQuotesChange}
        />

        <Button onClick={buttonSubmitFocusHandler}>Submit</Button>
      </form>
    </Fragment>
  );
};

export default CreateQuoteForm;
