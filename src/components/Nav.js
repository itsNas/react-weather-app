import React, { useState } from "react";

function Nav({ onCityChange }) {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    if (value === "") return;
    onCityChange(value);
    setValue("");
  };
  console.log(value);
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
      <div className="SearchBox">
        <form onSubmit={handleOnChange}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search for a city ..."
            autoFocus
          />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
}

export default Nav;
