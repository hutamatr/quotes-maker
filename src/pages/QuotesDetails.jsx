import React, { useContext } from "react";

import Card from "../components/UI/Card";
import QuotesContext from "../store/quotes-context";

const QuotesDetails = () => {
  const context = useContext(QuotesContext);

  return <Card></Card>;
};

export default QuotesDetails;
