import { useState, useEffect, useCallback } from "react";

import CustomLocalStorage from "./CustomUseLocalStorage";

function CustomeUseFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [url, setUrl] = useState("");
  const [data, setData] = useState({});

  const [, , saveToLocalStorage, removeLocalStorage] = CustomLocalStorage();

  const doFetch = useCallback((url, data = {}, options = {}) => {
    setUrl(url);
    setOptions(options);

    setData(data);
    setIsLoading(true);
  }, []);

  async function fetchCall() {
    try {
      const requestOptions = {
        ...options,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      let response = await fetch(url, requestOptions);
      let resultData = await response.json();

      if (resultData?.message) {
        throw new Error(resultData.message);
      }

      setResponse(resultData);
      saveToLocalStorage("token", resultData.token);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setError(e);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (isLoading) {
      fetchCall();
    }
  }, [isLoading]);

  return [
    { isLoading, response, error },
    setResponse,
    removeLocalStorage,
    doFetch,
  ];
}

export default CustomeUseFetch;
