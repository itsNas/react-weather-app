import React from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { useWeather } from "../hooks";

function Container() {
  const { weatherData } = useWeather();

  return (
    <div className="container">
      {weatherData ? (
        <CurrentWeather data={weatherData} />
      ) : (
        <div>Loading...</div>
      )}
      <Forecast />
    </div>
  );
}

export default Container;
