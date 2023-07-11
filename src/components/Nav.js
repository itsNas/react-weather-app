import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

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
    <div className="flex items-center justify-between px-3 py-1">
      <div className="">
        <img
          className="w-24"
          src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
          style={{ maxWidth: "100px", height: "auto" }}
          alt={"logo"}
        />
      </div>
      <div className="">
        <form onSubmit={handleOnChange} className="flex">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search for a city ..."
            autoFocus
            className=" rounded-md px-2 text-black"
          />
          <button>
            <FiSearch className="absolute -ml-6 -my-2 text-gray-900" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Nav;
