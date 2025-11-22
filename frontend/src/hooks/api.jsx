import { useState, useEffect } from "react";

// Necessary add the api and the url; ex: guardianAPI,"/search?s=football"
const get = (api, url) => {
  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState({});

  // Preventing from executing multiple times
  useEffect(() => {
    api
      .get(url)
      .then((res) => setResponse(res))
      .finally(() => setLoading(false));
  }, []);

  return { isLoading, response };
};

export { get };
