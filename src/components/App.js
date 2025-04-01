import React from "react";
import "./../styles/App.css";

const App = () => {
  const cityList = [
    { name: "Goa", country: "India" },
    { name: "Amsterdam", country: "Netherlands" },
    { name: "New York", country: "USA" },
    { name: "Darjeeling", country: "India" },
    { name: "Tokyo", country: "Japan" },
    { name: "Lonavala", country: "India" },
    { name: "Munnar", country: "India" },
    { name: "Leh Ladakh", country: "India" },
    { name: "Agra", country: "India" },
    { name: "Dalhousie", country: "India" },
    { name: "Coorg", country: "India" },
    { name: "Varanasai", country: "India" },
    { name: "Jaipur", country: "India" },
    { name: "Kahna National Park", country: "India" },
    { name: "Amritsar", country: "India" },
    { name: "Mussoorie", country: "India" },
    { name: "Mount Abu", country: "India" },
    { name: "Tirupati", country: "India" }
  ];

  const indianCities = cityList.filter(city => city.country === "India");

  return (
    <div id="main">
      <h2>Popular Indian Vacation Destinations</h2>
      <ol>
        {indianCities.map((city, index) => (
          <li key={`location${index + 1}`} data-ns-test="city-name">{city.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
