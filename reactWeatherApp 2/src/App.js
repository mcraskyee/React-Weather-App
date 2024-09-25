import "./App.css";
import { React, useState, useEffect } from "react";
import fetchWeather from "./services/weatherApis.js";
import SearchBar from "./components/SearchBar.jsx";
import WeatherForecast from "./components/WeatherForecast.jsx";
import CityCards from "./components/CityCards.jsx";
import WeatherDetails from "./components/WeatherDetails.jsx";
import WeatherInfo from "./components/WeatherInfo.jsx";
import DisplayTime from "./components/DisplayTime.jsx";

function App() {
  const [currentCityWeather, setCurrentCityWeather] = useState(null);
  const [currentCityFuture, setcurrentCityFuture] = useState(null);
  // const [citiesWeather, setCitiesWeather] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);
  const currentCity = "Brisbane";
  const currentDay = 1;
  const forecastDay = 5;

  useEffect(() => {
    fetchWeather(currentCity, currentDay, setCurrentCityWeather);
    fetchWeather(currentCity, forecastDay, setcurrentCityFuture);
    fetchWeather();
  }, []);

  const handleSearch = async (city) => {
    try {
      const weatherData = await fetchWeather(
        city,
        currentDay,
        setCurrentCityWeather
      );
      const forecastData = await fetchWeather(
        city,
        forecastDay,
        setcurrentCityFuture
      );
      if (weatherData && forecastData) {
        setCurrentCityWeather(weatherData);
        setcurrentCityFuture(forecastData);
        setIsInputValid(true);
      } else {
        setIsInputValid(false);
        console.error("Invalid city name or no data found");
      }
    } catch (error) {
      console.error("error fetching data", error);
    }
  };

  return (
    <main className="App">
      <section className="app-left">
        <DisplayTime className="app-left-display" />
        <div className="app-left-main">
          <WeatherDetails currentCityWeather={currentCityWeather} />
          <WeatherInfo currentCityWeather={currentCityWeather} />
        </div>
      </section>
      <section className="app-right">
        <WeatherForecast currentCityFuture={currentCityFuture} />
        <SearchBar
          onSearch={handleSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          isInputValid={isInputValid}
        />
        <CityCards />
      </section>
    </main>
  );
}

export default App;
