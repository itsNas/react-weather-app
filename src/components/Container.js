import React from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { useWeather } from "../hooks";

function Container() {
  const { getData } = useWeather();
  return (
    <div className="container">
      <CurrentWeather data={getData} />
      <Forecast />
    </div>
  );
}

export default Container;
