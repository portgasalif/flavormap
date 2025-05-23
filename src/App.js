import "./App.css";
import Business from "./components/Business/Business";
import SearchBar from "./components/SearchBar/SearchBar";
import business from "./data/mockData";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="business-list">
        <Business business={business} />
        <Business business={business} />
        <Business business={business} />
        <Business business={business} />
        <Business business={business} />
        <Business business={business} />
        <Business business={business} />
      </div>
    </div>
  );
}

export default App;
