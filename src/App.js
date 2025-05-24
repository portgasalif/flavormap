import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import BusinessList from "./components/BusinessList/BusinessList";

const businesses = [
  {
    id: 1,
    imageSrc:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/23/4b/c4/photo0jpg.jpg?w=1400&h=800&s=1",
    name: "The Coffee House",
    address: "123 Coffee St",
    city: "Coffee Town",
    state: "CA",
    zipcode: "12345",
    category: "Coffee Shop",
    rating: 4.5,
    reviewCount: 120,
  },
  {
    id: 2,
    imageSrc:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/23/4b/c4/photo0jpg.jpg?w=1400&h=800&s=1",
    name: "Pizza Paradise",
    address: "456 Pizza Ave",
    city: "Food City",
    state: "NY",
    zipcode: "67890",
    category: "Italian",
    rating: 4.3,
    reviewCount: 85,
  },
];
function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
