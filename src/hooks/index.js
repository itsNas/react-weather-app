import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (city) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
      params: { q: `${city}`, days: "3" },
      headers: {
        "X-RapidAPI-Key": "bac3cc626fmshedc24300a0f5e93p13ff4fjsn040a85627261",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    const source = axios.CancelToken.source();
    setLoading(true);
    axios
      .request(options, { cancelToken: source.token })
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (err) {
        if (!city) {
          setError("No city specified");
        }
      })
      .finally(function () {
        setLoading(false);
      });
    return () => {
      source.cancel("Pervious request canceled");
    };
  }, [city]);

  // console.log(data);
  return { data, loading, error };
};
