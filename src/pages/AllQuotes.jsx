import React, { useContext } from "react";

import Card from "../components/UI/Card";
import QuotesContext from "../store/quotes-context";

import "../scss/all-quotes.scss";

const AllQuotes = () => {
  const context = useContext(QuotesContext);

  return (
    <section className="all-quotes">
      <ul>
        {context.quotesList.map((quotes) => {
          return (
            <Card key={quotes.id}>
              <li>
                <h2>{quotes.quotes}</h2>
                <span>{quotes.author}</span>
              </li>
            </Card>
          );
        })}
      </ul>
    </section>
  );
};

export default AllQuotes;
