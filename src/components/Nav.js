import React from "react";
import SearchBox from "./searchBox";
// import { fetchWeatherData } from "./FetchWeatherData";
import { useFetchWeatherData } from "../hooks";

function Nav() {
  const { fetchWeatherData } = useFetchWeatherData();
  const handleOnSearchChange = (searchData) => {
    fetchWeatherData(searchData);
  };

  return (
    <div className="Nav">
      <div className="navLogo">
        <img
          className="img-fluid "
          src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
          style={{ maxWidth: "100px", height: "auto" }}
          alt={"logo"}
        />
      </div>
      <SearchBox onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default Nav;
