import React from "react";

function CurrentWeather({ data }) {
  if (!data) {
    return null;
  }
  console.log(data);
  return (
    <div className="weather-side">
      <div className="weather-gradient"></div>
      <div className="date-container">
        <h2 className="date-dayname">Today</h2>
        <span className="date-day">{}</span>
        <i className="location-icon" data-feather="map-pin"></i>
        <span className="location">{data.name}</span>
      </div>
      <div className="weather-container">
        <i className="weather-icon" data-feather={data.weather[0].icon}></i>
        <h1 className="weather-temp">{data.main.temp}°C</h1>
        <h3 className="weather-desc">{data.weather[0].description}</h3>
      </div>
    </div>
  );
}

export default CurrentWeather;
