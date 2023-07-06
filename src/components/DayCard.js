import moment from "moment";
import React, { useState } from "react";

function DayCard({ data, onClickIndex }) {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleClick = (index) => {
    setSelectedCard(index);
    // call the onClick prop with the selected index
    onClickIndex(index);
  };

  const days = data.forecast.forecastday.slice(0, 3);

  return (
    <div className="week-container">
      <ul className="week-list bg-slate-400/30 mx-5 my-8 p-0 drop-shadow-2xl rounded-lg flex items-center justify-center">
        {days.map((day, index) => (
          <li
            key={index}
            className={selectedCard === index ? "active" : ""}
            onClick={() => handleClick(index)}
          >
            <img
              className="block h-16 w-auto mx-0 my-auto xs:h-20"
              src={day.day.condition.icon}
              alt="weather icon"
            ></img>
            <p className="day-name">{moment(day.date).format("dddd")}</p>
            <p className="day-temp">{day.day.avgtemp_c}°C</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DayCard;
