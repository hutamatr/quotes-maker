import React from "react";

const QuotesContext = React.createContext({
  quotesList: [],
  addQuotes: (item) => {},
  removeQuotes: (id) => {},
});

export default QuotesContext;
