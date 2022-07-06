import React from "react";

import CommentItem from "./CommentItem";

const CommentsList = ({ commentsData }) => {
  return (
    <ul className="comments__lists">
      {commentsData.map((comment) => {
        return (
          <CommentItem
            commentText={comment.text}
            commentName={comment.name}
            commentDate={comment.date}
            key={comment.id}
          />
        );
      })}
    </ul>
  );
};

export default CommentsList;
