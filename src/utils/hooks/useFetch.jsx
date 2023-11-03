import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = axios.get(endpoint);
    getData.then((res) => setData(res.data));
  }, [endpoint]);

  return { data };
};
