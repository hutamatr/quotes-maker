import React, { Fragment } from "react";

import Button from "../UI/Button";

const CreateQuoteForm = ({
  onFormSubmit,
  onAuthorChange,
  onQuotesChange,
  onQuotesInput,
}) => {
  return (
    <Fragment>
      <form onSubmit={onFormSubmit} className="create__form">
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

        <Button>Submit</Button>
      </form>
    </Fragment>
  );
};

export default CreateQuoteForm;
