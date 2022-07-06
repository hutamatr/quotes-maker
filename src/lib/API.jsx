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

  if (response.status !== 200) {
    throw new Error("Could not fetch quote.");
  }

  const data = await response.data;

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

export const createComments = async (commentData) => {
  const response = await axios({
    method: "post",
    url: `${BASE_URL}/comments/${commentData.quotesId}.json`,
    data: commentData.comment,
  });

  console.log(commentData.quoteId, commentData.comment);

  if (response.status !== 200) {
    throw new Error("Failed sent comment");
  }

  const data = await response.data;

  return { commentId: data.name };
};

export const getComments = async (quotesId) => {
  const response = await axios({
    method: "get",
    url: `${BASE_URL}/comments/${quotesId}.json`,
  });

  if (response.status !== 200) {
    throw new Error("Failed get comment data");
  }

  const data = await response.data;

  const responseCommentData = [];

  for (const key in data) {
    const newComments = {
      id: key,
      ...data[key],
    };
    responseCommentData.push(newComments);
  }

  return responseCommentData;
};
