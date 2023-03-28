import React from "react";
import SearchBox from "./searchBox";

function Nav() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
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
