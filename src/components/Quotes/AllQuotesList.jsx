import React, { Fragment } from "react";
import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";
import SortQuotes from "./SortQuotes";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      // return quoteA.date > quoteB.date ? 1 : -1;
      return new Date(quoteA.date) - new Date(quoteB.date);
    } else {
      // return quoteA.date < quoteB.date ? 1 : -1;
      return new Date(quoteB.date) - new Date(quoteA.date);
    }
  });
};

const QuotesList = ({ quotesList, onViewQuotes, onDeleteQuotes }) => {
  const { url } = useRouteMatch();

  // Make query parameters for sort ascending/descending

  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortedQuotesList = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(quotesList, isSortedQuotesList);

  return (
    <Fragment>
      {sortedQuotes.length > 1 && (
        <SortQuotes
          onHistory={history}
          onLocation={location.pathname}
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
                    <Link to={`${url}/${quotes.id}`}>
                      <Button
                        type={"button"}
                        onClick={onViewQuotes.bind(this, quotes.id)}
                      >
                        View
                      </Button>
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
