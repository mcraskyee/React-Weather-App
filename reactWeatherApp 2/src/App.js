import "./App.css";
import { React, useState, useEffect, useCallback } from "react";
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
  const intervalTime = 4000;

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
  const [intervalId, setIntervalId] = useState(null);

  // 定义 fetchAllCitiesWeather 函数
  const fetchAllCitiesWeather = useCallback(
    async (selectedCities) => {
      const weatherPromises = selectedCities.map((city) =>
        fetchWeather(city, currentDay)
      );
      try {
        const weatherData = await Promise.all(weatherPromises);
        const validWeatherData = weatherData.filter(
          (data) => data && data.current && data.current.condition
        );
        // 如果有效数据少于4个，从剩余的城市中继续获取数据，直到有4个有效数据
        while (validWeatherData.length < 4) {
          const remainingCities = cities.filter(
            (city) => !selectedCities.includes(city)
          );
          const additionalCity =
            remainingCities[Math.floor(Math.random() * remainingCities.length)];
          const additionalWeatherData = await fetchWeather(
            additionalCity,
            currentDay
          );
          if (
            additionalWeatherData &&
            additionalWeatherData.current &&
            additionalWeatherData.current.condition
          ) {
            validWeatherData.push(additionalWeatherData);
          }
        }
        setCitiesWeather(validWeatherData.slice(0, 4));
      } catch (error) {
        console.error("Error fetching cities weather data", error);
      }
    },
    [currentDay]
  );

  // get 4 cities randomly and shuffle
  const getRandomCities = useCallback(() => {
    const shuffled = cities.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, []);

  // update Cities Weather data
  const updateCitiesWeather = useCallback(() => {
    const selectedCities = getRandomCities();
    fetchAllCitiesWeather(selectedCities);
  }, [fetchAllCitiesWeather, getRandomCities]);

  // get current city data
  useEffect(() => {
    fetchWeather(currentCity, currentDay).then(setCurrentCityWeather);
    fetchWeather(currentCity, forecastDay).then(setCurrentCityFuture);
  }, [currentCity, currentDay, forecastDay]);

  // update current city data
  useEffect(() => {
    updateCitiesWeather(); // 立即更新一次城市天气数据
    const id = setInterval(updateCitiesWeather, intervalTime); // 每4秒钟更新一次城市天气数据
    setIntervalId(id);
    return () => clearInterval(id); // 在组件卸载时清除定时器
  }, [updateCitiesWeather]);

  //click random city
  const handleCityClick = async (city) => {
    try {
      const weatherData = await fetchWeather(city, currentDay);
      const forecastData = await fetchWeather(city, forecastDay);
      if (weatherData && forecastData) {
        setCurrentCityWeather(weatherData);
        setCurrentCityFuture(forecastData);
      } else {
        console.error("No data found for the selected city");
      }
    } catch (error) {
      console.error("Error fetching data for the selected city", error);
    }
  };

  // 定义 handleSearch 函数
  const handleSearch = async (city) => {
    try {
      const weatherData = await fetchWeather(city, currentDay);
      const forecastData = await fetchWeather(city, forecastDay);
      if (weatherData && forecastData) {
        setCurrentCityWeather(weatherData);
        setCurrentCityFuture(forecastData);
        setIsInputValid(true);
      } else {
        setIsInputValid(false);
        console.error("Invalid city name or no data found");
      }
    } catch (error) {
      console.error("error fetching data", error);
    }
  };

  const handleSearchInputChange = (input) => {
    setSearchInput(input);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    const filteredCities = cities.filter((city) =>
      city.toLowerCase().startsWith(input.toLowerCase())
    );
    if (filteredCities.length > 0) {
      fetchAllCitiesWeather(filteredCities.slice(0, 4));
    } else {
      setCitiesWeather([]);
    }
    if (input === "") {
      const id = setInterval(updateCitiesWeather, intervalTime);
      setIntervalId(id);
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
          onInputChange={handleSearchInputChange}
        />
        <CityCards
          citiesWeather={citiesWeather}
          onCityClick={handleCityClick}
        />
      </section>
    </main>
  );
}

export default App;
