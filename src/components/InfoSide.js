import React, { useState } from "react";
import DayCard from "./DayCard";
import { WiMoonrise, WiMoonset, WiSunrise, WiSunset } from "react-icons/wi";

function InfoSide({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const day = data.forecast.forecastday[selectedIndex].day;
  const astroDay = data.forecast.forecastday[selectedIndex].astro;

  return (
    <div className="info-container mt-4 md:mt-0">
      <div className="weather-info flex justify-evenly">
        <div className="astro-info">
          <div className="sun card">
            <div className="sunrise cardInfo">
              {/* <WiSunrise className="icon" /> */}
              <p>Sunrise :</p>
              <p>{astroDay.sunrise}</p>
            </div>
            <div className="sunset cardInfo">
              {/* <WiSunset className="icon" /> */}
              <p>Sunset :</p>
              <p>{astroDay.sunset}</p>
            </div>
          </div>
          <div className="moon card">
            <div className="moonrise cardInfo">
              {/* <WiMoonrise className="icon" /> */}
              <p>Moonrise :</p>
              <p>{astroDay.moonrise}</p>
            </div>
            <div className="moonset cardInfo">
              {/* <WiMoonset className="icon" /> */}
              <p>Moonset :</p>
              <p>{astroDay.moonset}</p>
            </div>
          </div>
        </div>
        <div className="today-info card ">
          <div className="info precipitation cardInfo">
            <p className="title">Precipitation :</p>
            <p className="value">{day.daily_chance_of_rain} %</p>
          </div>
          <div className="info humidity cardInfo">
            <p className="title">Humidity :</p>
            <p className="value">{day.avghumidity} %</p>
          </div>
          <div className="info wind cardInfo">
            <p className="title">Wind :</p>
            <p className="value">{day.maxwind_kph} km/h</p>
          </div>
        </div>
      </div>
      <DayCard data={data} onClickIndex={setSelectedIndex} />
    </div>
  );
}

export default InfoSide;
