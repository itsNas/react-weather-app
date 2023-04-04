import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (city) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: " https://api.weatherapi.com/v1/forecast.json",
      params: {
        q: `${city}`,
        days: "3",
        key: "d26282c647ea415e94854357230404",
      },
      timeout: 20000,
    };

    const source = axios.CancelToken.source();
    setLoading(true);
    axios
      .request(options, { cancelToken: source.token })
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (err) {
        console.error("Error fetching data: ", err);
        setError(err);
      })
      .finally(function () {
        setLoading(false);
      });
    return () => {
      if (source) {
        source.cancel("Previous request canceled");
      }
    };
  }, [city]);

  // console.log(data);
  return { data, loading, error };
};
