import React from "react";

import Button from "../UI/Button";

import "../../scss/sort-quotes.scss";

const SortQuotes = ({ onHistory, onLocation, onSortedQuotesList }) => {
  const sortButtonHandler = () => {
    onHistory.push({
      pathname: onLocation,
      search: `?sort=${onSortedQuotesList ? "desc" : "asc"}`,
    });
    // onHistory.push(`${onLocation}?sort=${onSortedQuotesList ? "desc" : "asc"}`);
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
