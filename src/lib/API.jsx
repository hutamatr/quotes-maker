import axios from "axios";

const BASE_URL =
  "https://quotes-maker-53037-default-rtdb.asia-southeast1.firebasedatabase.app";

export const getAllQuotes = async () => {
  const response = await axios({
    method: "get",
    url: `${BASE_URL}/quotes.json`,
  });

  if (response.status !== 200) {
    throw new Error("Failed Get Data");
  }

  const data = await response.data;

  const dataQuotes = [];

  for (const key in data) {
    const newQuotes = {
      id: key,
      ...data[key],
    };

    dataQuotes.push(newQuotes);
  }

  return dataQuotes;
};

export const createQuotes = async (quotesData) => {
  const response = await axios({
    method: "post",
    url: `${BASE_URL}/quotes.json`,
    data: quotesData,
  });
  if (response.status !== 200) {
    throw new Error("Failed create quotes");
  }

  return null;
};

export const getSingleQuote = async (quoteId) => {
  const response = await axios({
    method: "get",
    url: `${BASE_URL}/quotes/${quoteId}.json`,
  });
  const data = await response.data;

  if (response.status !== 200) {
    throw new Error("Could not fetch quote.");
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
};

export const putQuotes = async (quotesData) => {
  const response = await axios({
    method: "put",
    url: `${BASE_URL}/quotes.json`,
    data: quotesData,
  });

  if (response.status !== 200) {
    throw new Error("Failed sent quotes");
  }

  return null;
};
