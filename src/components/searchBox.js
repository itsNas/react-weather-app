import React, { useState } from "react";

function SearchBox({ onSearchChange }) {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    onSearchChange(search);
    setSearch("");
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleOnChange}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a city ..."
          autoFocus
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBox;
