import React from "react";

const QuotesContext = React.createContext({
  quotesList: [],
  quotesView: {},
  addQuotes: (item) => {},
  removeQuotes: (id) => {},
  viewQuotes: (id) => {},
});

export default QuotesContext;
