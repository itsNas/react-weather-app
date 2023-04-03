import React, { useState } from "react";
import DayCard from "./DayCard";

function InfoSide({ data, loading, error }) {
  const [selectedIndex, setSelectedIndex] = useState(1);
  console.log(selectedIndex);

  if (loading) {
    return <div>Loading ............</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const day = data.forecast.forecastday[selectedIndex].day;

  return (
    <div className="info-side">
      <div className="today-info-container">
        <div className="today-info">
          <div className="precipitation">
            <span className="title">PRECIPITATION</span>
            <span className="value">{day.daily_chance_of_rain} %</span>
            <div className="clear"></div>
          </div>
          <div className="humidity">
            <span className="title">HUMIDITY</span>
            <span className="value">{day.avghumidity} %</span>
            <div className="clear"></div>
          </div>
          <div className="wind">
            <span className="title">WIND</span>
            <span className="value">{day.maxwind_kph} km/h</span>
            <div className="clear"></div>
          </div>
        </div>
        <DayCard
          data={data}
          loading={loading}
          error={error}
          onClickIndex={setSelectedIndex}
        />
      </div>
    </div>
  );
}

export default InfoSide;
