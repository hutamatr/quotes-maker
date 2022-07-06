import React from "react";

import Card from "../UI/Card";

const CommentItem = ({ commentText, commentName, commentDate }) => {
  return (
    <li>
      <Card className={"comments-item--wrapper"}>
        <h3>{commentName}</h3>
        <p>{commentText}</p>
        <span>{commentDate}</span>
      </Card>
    </li>
  );
};

export default CommentItem;
