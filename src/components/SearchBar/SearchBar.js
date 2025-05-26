import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ searchYelp }) {
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
    if (searchTerm && location) {
      searchYelp(searchTerm, location, sortOption);
      setSearchTerm("");
    } else {
      alert("Please enter both a search term and a location.");
    }
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
              sortOption === "rating"
                ? "search-bar-sort-option active"
                : "search-bar-sort-option"
            }
            onClick={() => handleOptionSelect("rating")}
          >
            Highest Rated
          </button>
          <button
            className={
              sortOption === "review_count"
                ? "search-bar-sort-option active"
                : "search-bar-sort-option"
            }
            onClick={() => handleOptionSelect("review_count")}
          >
            Most Reviewed
          </button>
        </div>
        <div className="search-bar-fields">
          <input
            className="search-bar-field"
            type="text"
            placeholder="Search Cuisine (e.g., pizza, sushi, burger)"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <select
            className="search-bar-field"
            value={location}
            onChange={handleLocationChange}
          >
            <option value="">Pilih Lokasi</option>
            <option value="Jakarta, DKI Jakarta">Jakarta, DKI Jakarta</option>
            <option value="Surabaya, Jawa Timur">Surabaya, Jawa Timur</option>
            <option value="Bandung, Jawa Barat">Bandung, Jawa Barat</option>
            <option value="Medan, Sumatera Utara">Medan, Sumatera Utara</option>
            <option value="Semarang, Jawa Tengah">Semarang, Jawa Tengah</option>
            <option value="Makassar, Sulawesi Selatan">
              Makassar, Sulawesi Selatan
            </option>
            <option value="Palembang, Sumatera Selatan">
              Palembang, Sumatera Selatan
            </option>
            <option value="Denpasar, Bali">Denpasar, Bali</option>
          </select>
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
