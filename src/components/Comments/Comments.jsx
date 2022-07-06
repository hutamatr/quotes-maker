import React, { useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from "../UI/Button";
import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";
import Loading from "../UI/Loading";
import useAxios from "../../hooks/use-axios";
import { getComments } from "../../lib/API";

import "../../scss/comments.scss";

const Comments = () => {
  const [showInputComment, setShowInputComment] = useState(false);
  const { quotesId } = useParams();

  const {
    sendRequest: getCommentsReq,
    data: getCommentsData,
    status: getCommentsStatus,
  } = useAxios(getComments);

  useEffect(() => {
    getCommentsReq(quotesId);
  }, [getCommentsReq, quotesId]);

  const showCommentHandler = () => {
    setShowInputComment(true);
  };

  const onCommentsAdd = useCallback(() => {
    getCommentsReq(quotesId);
  }, [getCommentsReq, quotesId]);

  const comments =
    getCommentsStatus === "pending" ? (
      <Loading />
    ) : getCommentsStatus === "completed" &&
      getCommentsData &&
      getCommentsData.length > 0 ? (
      <CommentsList commentsData={getCommentsData} />
    ) : getCommentsStatus === "completed" &&
      getCommentsData &&
      getCommentsData.length === 0 ? (
      <p className="comments--empty">No Comment added yet</p>
    ) : null;

  return (
    <div className="comments">
      {!showInputComment ? (
        <Button onClick={showCommentHandler}>Add a Comment</Button>
      ) : (
        <CommentsForm quotesId={quotesId} onComment={onCommentsAdd} />
      )}
      {comments}
    </div>
  );
};

export default Comments;
