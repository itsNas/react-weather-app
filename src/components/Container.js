import React from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./InfoSide";

function Container({ data, loading, error }) {
  return (
    <div className="container">
      <CurrentWeather data={data} loading={loading} error={error} />
      <Forecast data={data} loading={loading} error={error} />
    </div>
  );
}

export default Container;
