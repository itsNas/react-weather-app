import moment from "moment";
import React from "react";

function CurrentWeather({ data }) {
  return (
    <div className="relative m-2 p-3 rounded-xl drop-shadow-lg text-white bg-[url('https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80')] ">
      <div className="absolute w-full h-full -m-3 rounded-lg bg-gradient-to-br from-slate-400/70 to-slate-600/50"></div>

      <div className="relative">
        <div className="date-container font-semibold">
          <div className="location text-3xl font-semibold">
            {data.location.name},{" "}
            <span className="text-xs"> {data.location.country}</span>
          </div>
          <div className="date-dayname">
            {moment(data.forecast.forecastday[0].date).format("dddd")}
          </div>
          <div className="date-day">
            {moment(data.forecast.forecastday[0].date).format("DD/MM/YYYY")}
          </div>
        </div>
        <div className="weather-container mt-10 flex justify-between items-center">
          <div className="weather-info">
            <h1 className="weather-temp text-6xl font-medium">
              {data.current.temp_c}°C
            </h1>
            <h3 className="weather-desc">{data.current.condition?.text}</h3>
          </div>
          <img
            className="weather-icon h-32"
            src={data.current.condition.icon}
            alt="weather icon"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
