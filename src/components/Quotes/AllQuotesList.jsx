import React, { Fragment } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";
import SortQuotes from "./SortQuotes";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return new Date(quoteA.date) - new Date(quoteB.date);
    } else {
      return new Date(quoteB.date) - new Date(quoteA.date);
    }
  });
};

const QuotesList = ({ quotesList, onDeleteQuotes }) => {
  // Make query parameters for sort ascending/descending

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortedQuotesList = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(quotesList, isSortedQuotesList);

  return (
    <Fragment>
      {sortedQuotes.length > 1 && (
        <SortQuotes
          onNavigate={navigate}
          onSortedQuotesList={isSortedQuotesList}
        />
      )}
      <ul>
        {sortedQuotes.map((quotes) => {
          return (
            <Card className={"all-quotes__card"} key={quotes.id}>
              <li className="all-quotes__link">
                <div className="all-quotes__content">
                  <h2>"{quotes.quotes}"</h2>
                  <span>- {quotes.author}</span>
                </div>
                <div className="all-quotes__button">
                  <span>{quotes.date}</span>
                  <div className="all-quotes__button--wrap">
                    <Link to={quotes.id}>
                      <Button type={"button"}>View</Button>
                    </Link>
                    <Button
                      type={"button"}
                      onClick={onDeleteQuotes.bind(this, quotes.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </li>
            </Card>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default QuotesList;
