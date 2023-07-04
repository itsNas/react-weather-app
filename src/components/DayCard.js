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
    <div>
      <div className="week-container">
        <ul className="week-list list-none p-0 mx-5 my-8 rounded-lg flex justify-center items-center bg-slate-400/50 drop-shadow-xl">
          {days.map((day, index) => (
            <li
              key={index}
              className={
                selectedCard === index
                  ? " bg-slate-50 text-black"
                  : " float-left p-5 cursor-pointer"
              }
              onClick={() => handleClick(index)}
            >
              <img
                className="day-icon"
                src={day.day.condition.icon}
                alt="weather icon"
              ></img>
              <span className="day-name block text-center">
                {moment(day.date).format("dddd")}
              </span>
              <span className="day-temp">{day.day.avgtemp_c}°C</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DayCard;
