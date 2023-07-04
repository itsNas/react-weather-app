import React, { useState } from "react";
import DayCard from "./DayCard";
import { WiMoonrise, WiMoonset, WiSunrise, WiSunset } from "react-icons/wi";

function InfoSide({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const day = data.forecast.forecastday[selectedIndex].day;

  return (
    <div className="info-container">
      <div className="weather-info flex justify-evenly">
        <div className="astro-info">
          <div className="sun card">
            <div className="sunrise cardInfo">
              <WiSunrise className="icon" />
              <p>Sunrise</p>
              <p>3.30</p>
            </div>
            <div className="sunset cardInfo">
              <WiSunset className="icon" />
              <p>Sunset</p>
              <p>3.30</p>
            </div>
          </div>
          <div className="moon card">
            <div className="moonrise cardInfo">
              <WiMoonrise className="icon" />
              <p>Moonrise</p>
              <p>4</p>
            </div>
            <div className="moonset cardInfo">
              <WiMoonset className="icon" />
              <p>Moonset</p>
              <p>5</p>
            </div>
          </div>
        </div>
        <div className="today-info card ">
          <div className="info precipitation cardInfo">
            <p className="title">PRECIPITATION</p>
            <p className="value">{day.daily_chance_of_rain} %</p>
          </div>
          <div className="info humidity cardInfo">
            <p className="title">HUMIDITY</p>
            <p className="value">{day.avghumidity} %</p>
          </div>
          <div className="info wind cardInfo">
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
