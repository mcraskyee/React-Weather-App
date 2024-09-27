import "./App.css";
import { React, useState, useEffect } from "react";
import cities from "./services/citiesData.js";
import fetchWeather from "./services/weatherApis.js";
import SearchBar from "./components/SearchBar.jsx";
import WeatherForecast from "./components/WeatherForecast.jsx";
import CityCards from "./components/CityCards.jsx";
import WeatherDetails from "./components/WeatherDetails.jsx";
import WeatherInfo from "./components/WeatherInfo.jsx";
import DisplayTime from "./components/DisplayTime.jsx";

function App() {
  //constants
  const currentCity = "Brisbane";
  const currentDay = 1;
  const forecastDay = 5;

  //states
  //WeatherDetails, WeatherInfo
  const [currentCityWeather, setCurrentCityWeather] = useState(null);
  //WeatherForecast
  const [currentCityFuture, setCurrentCityFuture] = useState(null);
  //CityCards
  const [citiesWeather, setCitiesWeather] = useState([]);
  //SearchBar
  const [searchInput, setSearchInput] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  useEffect(() => {
    const fetchAllCitiesWeather = async () => {
      const weatherPromises = cities.map((city) =>
        fetchWeather(city, currentDay)
      );
      try {
        const weatherData = await Promise.all(weatherPromises);
        setCitiesWeather(weatherData);
      } catch (error) {
        console.error("Error fetching cities weather data", error);
      }
    };

    //add
    const getRandomCities = () => {
      const shuffled = cities.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 4);
    };

    const updateCitiesWeather = () => {
      const selectedCities = getRandomCities();
      fetchAllCitiesWeather(selectedCities);
    };

    fetchWeather(currentCity, currentDay).then(setCurrentCityWeather);
    fetchWeather(currentCity, forecastDay).then(setCurrentCityFuture);

    //add
    updateCitiesWeather();

    const intervalId = setInterval(updateCitiesWeather, 4000);
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentCity, currentDay, forecastDay]);

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
        setCurrentCityFuture
      );
      console.log("setCurrentCityWeather", setCurrentCityWeather);
      console.log("setCurrentCityFuture", setCurrentCityFuture);
      if (weatherData && forecastData) {
        setCurrentCityWeather(weatherData);
        setCurrentCityFuture(forecastData);
        setIsInputValid(true);
      } else {
        setIsInputValid(false);
        setCitiesWeather(cities);
        console.error("Invalid city name or no data found");
      }
      if (!weatherData) {
        console.error("weatherData has problem");
        console.log("weatherData", weatherData);
      }
      if (!forecastData) {
        console.error("forecastData has problem");
        console.log("forecastData", forecastData);
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
        <CityCards citiesWeather={citiesWeather} />
      </section>
    </main>
  );
}

export default App;
