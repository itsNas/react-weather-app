import React from "react";

function CurrentWeather({ data, loading, error }) {
  if (loading) {
    return <div>Loading ............</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="weather-side">
      <div className="weather-gradient"></div>
      <div className="date-container">
        <h2 className="date-dayname">Today</h2>
        <span className="date-day">{data?.forecast?.forecastday[0]?.date}</span>
        <i className="location-icon" data-feather="map-pin"></i>
        <span className="location">
          {data?.location?.region}, {data?.location?.country}
        </span>
      </div>
      <div className="weather-container">
        <img
          className="weather-icon"
          src={data?.current?.condition?.icon}
          alt="weather icon"
        ></img>
        <h1 className="weather-temp">{data?.current?.temp_c}°C</h1>
        <h3 className="weather-desc">{data?.current?.condition?.text}</h3>
      </div>
    </div>
  );
}

export default CurrentWeather;
