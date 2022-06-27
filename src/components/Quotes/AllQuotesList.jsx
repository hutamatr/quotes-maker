import React from "react";
import { Link } from "react-router-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";

const QuotesList = ({ id, quotes, author, onViewQuotes, onDeleteQuotes }) => {
  return (
    <Card className={"all-quotes__card"}>
      <ul>
        <li className="all-quotes__link">
          <div className="all-quotes__content">
            <h2>"{quotes}"</h2>
            <span>- {author}</span>
          </div>
          <div className="all-quotes__button">
            <Link to={`/all-quotes/${id}`}>
              <Button type={"button"} onClick={onViewQuotes.bind(this, id)}>
                View
              </Button>
            </Link>
            <Button type={"button"} onClick={onDeleteQuotes.bind(this, id)}>
              Delete
            </Button>
          </div>
        </li>
      </ul>
    </Card>
  );
};

export default QuotesList;
