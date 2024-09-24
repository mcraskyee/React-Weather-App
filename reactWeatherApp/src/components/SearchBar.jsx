import { React, useState } from "react";
import "../css/SearchBar.css";
import fetchWeather from "../services/weatherApis";

function SearchBar({ setData, currentCity, setCurrentCity }) {
  const [searchCity, setSearchCity] = useState("");

  // useEffect(() => {
  //   fetchWeather(currentCity, setData);
  // }, [setData]);

  const handleSearchChange = (event) => {
    setSearchCity(event.target.value);
  };

  const handleSubmit = async () => {
    if (searchCity.trim() === "") {
      alert("Please enter a city name");
      return;
    }
    await fetchWeather(searchCity, setData);
    setCurrentCity(searchCity);
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Please input a city"
        onChange={handleSearchChange}
      />
      <button className="search-button" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
