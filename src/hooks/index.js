import { useState, useEffect } from "react";
import axios from "axios";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../api";

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);

  async function fetchData(endpoint) {
    try {
      const response = await axios.get(endpoint);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (weatherData === null) return;
    // console.log(weatherData);
  }, [weatherData]);

  async function submitRequest(search) {
    const endpoint = `${WEATHER_API_URL}/weather?q=${search}&units=metric&appid=${WEATHER_API_KEY}`;
    await fetchData(endpoint);
  }
  // console.log(weatherData);
  return {
    weatherData,
    submitRequest,
  };
};
