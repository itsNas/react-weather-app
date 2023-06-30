import React, { useState } from "react";
import DayCard from "./DayCard";
import { WiMoonrise, WiMoonset, WiSunrise, WiSunset } from "react-icons/wi";

function InfoSide({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const day = data.forecast.forecastday[selectedIndex].day;

  return (
    <div className="info-container">
      <div className="weather-info">
        <div className="astro-info">
          <div className="sun-card">
            <div className="sunrise">
              <WiSunrise />
              <p>Sunrise</p>
              <p>3.30</p>
            </div>
            <div className="sunset">
              <WiSunset />
              <p>Sunset</p>
              <p>3.30</p>
            </div>
          </div>
          <div className="moon-card">
            <div className="moonrise">
              <WiMoonrise />
              <p>Moonrise</p>
              <p>4</p>
            </div>
            <div className="moonset">
              <WiMoonset />
              <p>Moonset</p>
              <p>5</p>
            </div>
          </div>
        </div>
        <div className="today-info ">
          <div className="info precipitation">
            <p className="title">PRECIPITATION</p>
            <p className="value">{day.daily_chance_of_rain} %</p>
          </div>
          <div className="info humidity">
            <p className="title">HUMIDITY</p>
            <p className="value">{day.avghumidity} %</p>
          </div>
          <div className="info wind">
            <p className="title">WIND</p>
            <p className="value">{day.maxwind_kph} km/h</p>
          </div>
        </div>
      </div>
      <DayCard data={data} onClickIndex={setSelectedIndex} />
    </div>
  );
}

export default InfoSide;
