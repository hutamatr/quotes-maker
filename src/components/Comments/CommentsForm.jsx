import React from "react";

import Button from "../UI/Button";

const CommentsForm = ({ onSubmitForm }) => {
  return (
    <form onSubmit={onSubmitForm} className="comments__form">
      <label htmlFor="comment">Add Comment :</label>
      <textarea name="comment" id="comment" cols="30" rows="5" />
      <Button>Add Comment</Button>
    </form>
  );
};

export default CommentsForm;
