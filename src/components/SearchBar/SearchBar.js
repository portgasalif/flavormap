function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-bar-sort-options">
        <button className="search-bar-sort-option">Best Match</button>
        <button className="search-bar-sort-option">Highest Rated</button>
        <button className="search-bar-sort-option">Most Reviewed</button>
      </div>
      <div className="search-bar-fields">
        <input
          className="search-bar-field"
          type="text"
          placeholder="Search Businesses"
        />
        <input className="search-bar-field" type="text" placeholder="Where?" />
      </div>
      <div className="search-bar-submit">
        <button type="submit">Let's Go!</button>
      </div>
    </div>
  );
}
export default SearchBar;
