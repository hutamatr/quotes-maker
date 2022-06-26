import React, { useReducer } from "react";
import QuotesContext from "./quotes-context";

const initQuotesItems = {
  quotesList: [],
  quotesView: {},
};

const quotesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_QUOTES":
      const updatedQuotes = state.quotesList.concat(action.payload);
      console.log(updatedQuotes);
      return {
        ...state,
        quotesList: updatedQuotes,
      };
    case "REMOVE_QUOTES":
      const removedQuotes = state.quotesList.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        quotesList: removedQuotes,
      };
    case "VIEW_QUOTES":
      const quotesView = state.quotesList.find((item) => {
        return item.id === action.payload;
      });

      return {
        ...state,
        quotesView,
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

  const viewQuotesHandler = (id) => {
    dispatchQuotes({ type: "VIEW_QUOTES", payload: id });
  };
  const value = {
    quotesList: quotesState.quotesList,
    quotesView: quotesState.quotesView,
    addQuotes: addQuotesHandler,
    removeQuotes: removeQuotesHandler,
    viewQuotes: viewQuotesHandler,
  };

  return (
    <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
  );
};

export default QuotesProvider;
