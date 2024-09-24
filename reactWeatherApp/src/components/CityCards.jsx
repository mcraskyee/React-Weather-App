import React from "react";
import "../css/CityCards.css";
const cities = [
  {
    id: 1,
    name: "Sydney",
    weather: "sunny",
    temp: "22",
  },
  {
    id: 2,
    name: "Shanghai",
    weather: "sunny",
    temp: "22",
  },
  {
    id: 3,
    name: "Melbourne",
    weather: "sunny",
    temp: "22",
  },
  {
    id: 4,
    name: "Delhi",
    weather: "sunny",
    temp: "22",
  },
];

function CityCards() {
  return (
    <div className="city">
      {cities.map((city) => (
        <div className="city-item" key={city.id}>
          <span class="city-item-icon material-symbols-outlined">
            {city.weather}
          </span>
          <h3 className="city-item-name">{city.name}</h3>
          <p className="city-item-temp">{city.temp}</p>
        </div>
      ))}
    </div>
  );
}

export default CityCards;
