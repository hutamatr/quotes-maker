import { useReducer, useCallback } from "react";

const initialState = (startWithPending) => {
  return {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  };
};

const axiosReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return {
        data: null,
        error: null,
        status: "pending",
      };
    case "SUCCESS":
      return {
        data: action.payload,
        error: null,
        status: "completed",
      };
    case "ERROR":
      return {
        data: null,
        error: action.payload,
        status: "completed",
      };
    default:
      return state;
  }
};

const useAxios = (requestFunc, startWithPending = false) => {
  const [axiosState, dispatch] = useReducer(
    axiosReducer,
    initialState(startWithPending)
  );

  const sendRequest = useCallback(
    async (requestData) => {
      dispatch({ type: "SEND" });

      try {
        const response = await requestFunc(requestData);
        dispatch({ type: "SUCCESS", payload: response });
      } catch (error) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    },
    [requestFunc]
  );

  return {
    sendRequest,
    ...axiosState,
  };
};

export default useAxios;
