import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import BusinessList from "./components/BusinessList/BusinessList";
import businesses from "./data/mockData";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="business-list">
        <BusinessList businesses={businesses} />
      </div>
    </div>
  );
}

export default App;
