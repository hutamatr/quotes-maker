import React from "react";

import Button from "../UI/Button";

import "../../scss/sort-quotes.scss";

const SortQuotes = ({ onNavigate, onSortedQuotesList }) => {
  const sortButtonHandler = () => {
    onNavigate({
      search: `?sort=${onSortedQuotesList ? "desc" : "asc"}`,
    });
  };

  return (
    <div className="sort-quotes">
      <Button onClick={sortButtonHandler}>{`Sort ${
        onSortedQuotesList ? "Descending" : "Ascending"
      } by Date`}</Button>
    </div>
  );
};

export default SortQuotes;
