import React from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

function Container({ data, loading, error }) {
  return (
    <div className="container">
      <CurrentWeather data={data} loading={loading} error={error} />
      <Forecast />
    </div>
  );
}

export default Container;
