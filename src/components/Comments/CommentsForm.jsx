import React, { useState, useEffect } from "react";
import moment from "moment";

import Button from "../UI/Button";
import Loading from "../UI/Loading";
import { generateName } from "../UI/GenerateName";
import useAxios from "../../hooks/use-axios";
import { createComments } from "../../lib/API";

const CommentsForm = ({ quotesId, onComment }) => {
  const [newComment, setNewComment] = useState("");

  const name = generateName();
  const date = moment().format("dddd MMMM DD YYYY, h:mm:ss a");

  const {
    sendRequest: commentsRequest,
    status: commentsReqStatus,
    error: commentsReqError,
  } = useAxios(createComments);

  useEffect(() => {
    if (commentsReqStatus === "completed" && !commentsReqError) {
      onComment();
    }
  }, [commentsReqStatus, commentsReqError, onComment]);

  const commentChangeHandler = (event) => {
    setNewComment(event.target.value);
  };

  const submitCommentsHandler = (event) => {
    event.preventDefault();

    const commentData = {
      quotesId,
      comment: {
        date,
        name,
        text: newComment,
      },
    };

    commentsRequest(commentData);
    setNewComment("");
  };

  return (
    <form onSubmit={submitCommentsHandler} className="comments__form">
      {commentsReqStatus === "pending" && <Loading />}
      <label htmlFor="comment">Add Comment :</label>
      <textarea
        name="comment"
        id="comment"
        onChange={commentChangeHandler}
        value={newComment}
      />
      <Button>Add Comment</Button>
    </form>
  );
};

export default CommentsForm;
