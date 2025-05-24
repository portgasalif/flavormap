import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import BusinessList from "./components/BusinessList/BusinessList";
import businesses from "./data/mockData";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
