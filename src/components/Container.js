import React from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { useWeather } from "../hooks";

function Container() {
  const { getData } = useWeather();
  const handleData = (data) => {
    getData({ data });
  };
  return (
    <div className="container">
      <CurrentWeather data={handleData} />
      <Forecast />
    </div>
  );
}

export default Container;
