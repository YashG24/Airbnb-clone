import React, { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search logic or pass searchText to parent component
    console.log("Search text:", searchText);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Find Inspiring Places.."
          className="search-input"
        />
        <button type="submit" className="search-button">
          <SearchRoundedIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
