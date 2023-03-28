import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

function SearchBox({ onSearchChange }) {
  const [search, setSearch] = useState("");
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="SearchBox">
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default SearchBox;
