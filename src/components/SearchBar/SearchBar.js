import "./SearchBar.css";
import React, { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortOption, setSortOption] = useState("best_match");

  const handleOptionSelect = (option) => {
    setSortOption(option);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Searching Yelp with ${searchTerm}, ${location}, ${sortOption}`
    );
  };
  return (
    <div className="search-bar">
      <div className="search-bar-header">
        <h1>Flavor Map</h1>
      </div>
      <div className="search-bar-main">
        <div className="search-bar-sort-options">
          <button
            className={
              sortOption === "best_match"
                ? "search-bar-sort-option active"
                : "search-bar-sort-option"
            }
            onClick={() => handleOptionSelect("best_match")}
          >
            Best Match
          </button>
          <button
            className={
              sortOption === "highest_rated"
                ? "search-bar-sort-option active"
                : "search-bar-sort-option"
            }
            onClick={() => handleOptionSelect("highest_rated")}
          >
            Highest Rated
          </button>
          <button
            className={
              sortOption === "most_reviewed"
                ? "search-bar-sort-option active"
                : "search-bar-sort-option"
            }
            onClick={() => handleOptionSelect("most_reviewed")}
          >
            Most Reviewed
          </button>
        </div>
        <div className="search-bar-fields">
          <input
            className="search-bar-field"
            type="text"
            placeholder="Search Businesses"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <input
            className="search-bar-field"
            type="text"
            placeholder="Where?"
            value={location}
            onChange={handleLocationChange}
          />
        </div>

        <button
          type="submit"
          className="search-bar-submit-btn"
          onClick={handleSubmit}
        >
          Let's Go!
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
