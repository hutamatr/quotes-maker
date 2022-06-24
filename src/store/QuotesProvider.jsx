import React, { useReducer } from "react";
import QuotesContext from "./quotes-context";

const initQuotesItems = {
  quotesList: [],
};

const quotesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_QUOTES":
      const updatedQuotes = state.quotesList.concat(action.payload);
      console.log(updatedQuotes);
      return {
        quotesList: updatedQuotes,
      };
    case "REMOVE_QUOTES":
      const removedQuotes = state.quotesList.filter(
        (item) => item.id !== action.payload
      );
      return {
        quotesList: removedQuotes,
      };
    default:
      return initQuotesItems;
  }
};

const QuotesProvider = ({ children }) => {
  const [quotesState, dispatchQuotes] = useReducer(
    quotesReducer,
    initQuotesItems
  );

  const addQuotesHandler = (item) => {
    dispatchQuotes({ type: "ADD_QUOTES", payload: item });
  };

  const removeQuotesHandler = (id) => {
    dispatchQuotes({ type: "REMOVE_QUOTES", payload: id });
  };

  const value = {
    quotesList: quotesState.quotesList,
    addQuotes: addQuotesHandler,
    removeQuotes: removeQuotesHandler,
  };

  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};

export default QuotesProvider;
