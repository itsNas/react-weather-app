import moment from "moment";
import React, { useState } from "react";

function DayCard({ data, loading, error, onClickIndex }) {
  const [selectedCard, setSelectedCard] = useState(0);
  if (loading) {
    return <div>Loading ............</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const onClick = (index) => {
    setSelectedCard(index);
    // call the onClick prop with the selected index
    onClickIndex(index);
  };

  const days = data.forecast.forecastday.slice(0, 4);
  const dayList = days.map((day, index) => (
    <li
      key={index}
      className={selectedCard === index ? "active" : ""}
      onClick={() => onClick(index)}
    >
      <img
        className="day-icon"
        src={day.day.condition.icon}
        alt="weather icon"
      ></img>
      <span className="day-name">{moment(day.date).format("dddd")}</span>
      <span className="day-temp">{day.day.avgtemp_c}°C</span>
    </li>
  ));

  return (
    <div>
      <div className="week-container">
        <ul className="week-list">
          {dayList}
          <div className="clear"></div>
        </ul>
      </div>
    </div>
  );
}

export default DayCard;
