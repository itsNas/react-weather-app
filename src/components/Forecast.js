import React, { useState } from "react";

function Forecast({ data, loading, error }) {
  const [selectedCard, setSelectedCard] = useState(0);

  if (loading) {
    return <div>Loading ............</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const days = data.forecast.forecastday.slice(0, 3);

  const dayList = days.map((day, index) => (
    <li
      key={index}
      className={selectedCard === index ? "active" : ""}
      onClick={() => handleCardClick(index)}
    >
      <i className="day-icon" data-feather={day.day.condition.icon}></i>
      <span className="day-name">{day.date}</span>
      <span className="day-temp">{day.day.avgtemp_c}°C</span>
    </li>
  ));

  return (
    <div className="info-side">
      <div className="today-info-container">
        <div className="today-info">
          <div className="precipitation">
            <span className="title">PRECIPITATION</span>
            <span className="value">
              :{data.forecast.forecastday[0].day.daily_chance_of_rain} %
            </span>
            <div className="clear"></div>
          </div>
          <div className="humidity">
            <span className="title">HUMIDITY</span>
            <span className="value">34 %</span>
            <div className="clear"></div>
          </div>
          <div className="wind">
            <span className="title">WIND</span>
            <span className="value">0 km/h</span>
            <div className="clear"></div>
          </div>
        </div>
      </div>
      <div className="week-container">
        <ul className="week-list">
          {dayList}
          <div className="clear"></div>
        </ul>
      </div>
      <div className="location-container">
        <button className="location-button">
          <i data-feather="map-pin"></i>
          <span>Change location</span>
        </button>
      </div>
    </div>
  );
}

export default Forecast;
