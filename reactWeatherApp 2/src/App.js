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

  // 定义 getRandomCities 函数
  const getRandomCities = useCallback(() => {
    const shuffled = cities.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, []);

  // 定义 updateCitiesWeather 函数
  const updateCitiesWeather = useCallback(() => {
    const selectedCities = getRandomCities();
    fetchAllCitiesWeather(selectedCities);
  }, [fetchAllCitiesWeather, getRandomCities]);

  // 使用 useEffect 获取当前城市的天气数据
  useEffect(() => {
    fetchWeather(currentCity, currentDay).then(setCurrentCityWeather);
    fetchWeather(currentCity, forecastDay).then(setCurrentCityFuture);
  }, [currentCity, currentDay, forecastDay]);

  // 使用 useEffect 更新城市天气数据
  useEffect(() => {
    updateCitiesWeather(); // 立即更新一次城市天气数据
    const intervalId = setInterval(updateCitiesWeather, intervalTime); // 每4秒钟更新一次城市天气数据
    return () => clearInterval(intervalId); // 在组件卸载时清除定时器
  }, [updateCitiesWeather]);

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
