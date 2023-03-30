import React from "react";

function CurrentWeather({ data }) {
  return (
    <div className="weather-side">
      <div className="weather-gradient"></div>
      <div className="date-container">
        <h2 className="date-dayname">Tuesday</h2>
        <span className="date-day">15 Jan 2019</span>
        <i className="location-icon" data-feather="map-pin"></i>
        <span className="location">{data.name}</span>
      </div>
      <div className="weather-container">
        <i className="weather-icon" data-feather="sun"></i>
        <h1 className="weather-temp">29°C</h1>
        <h3 className="weather-desc">sunny</h3>
      </div>
    </div>
  );
}

export default CurrentWeather;
