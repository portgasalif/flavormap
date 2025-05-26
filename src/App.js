import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import BusinessList from "./components/BusinessList/BusinessList";
import Yelp from "./utils/Yelp";

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (searchTerm, location, sortOption) => {
    Yelp.search(searchTerm, location, sortOption)
      .then((businesses) => {
        setBusinesses(businesses);
      })
      .catch((error) => {
        console.error("Error fetching data from Yelp:", error);
      });
  };
  return (
    <div className="App">
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}
export default App;
