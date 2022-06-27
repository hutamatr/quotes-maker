import React, { useState } from "react";

import Button from "../UI/Button";
import CommentsForm from "./CommentsForm";

import "../../scss/comments.scss";

const Comments = () => {
  const [showInputComment, setShowInputComment] = useState(false);

  const showCommentHandler = () => {
    setShowInputComment(true);
  };

  const submitCommentsHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="comments">
      {!showInputComment ? (
        <Button onClick={showCommentHandler}>Add a Comment</Button>
      ) : (
        <CommentsForm onSubmitForm={submitCommentsHandler} />
      )}
    </div>
  );
};

export default Comments;
