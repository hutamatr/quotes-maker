import React, { useContext } from "react";

import Card from "../components/UI/Card";
import QuotesContext from "../store/quotes-context";

const QuotesDetails = () => {
  const { quotesView } = useContext(QuotesContext);

  return (
    <Card className={"quotes-details__card"}>
      <div className="quotes-details__wrapper">
        <p>{quotesView.quotes}</p>
        <span>{quotesView.author}</span>
      </div>
    </Card>
  );
};

export default QuotesDetails;
