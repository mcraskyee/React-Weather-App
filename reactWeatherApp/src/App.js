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
  const [data, setData] = useState("");
  const [currentCity, setCurrentCity] = useState("Brisbane");
  const [days, setDays] = useState(1);

  useEffect(() => {
    fetchWeather(currentCity, setDays, setData);
  }, [currentCity]);

  return (
    <main className="App">
      <section className="app-left">
        <DisplayTime className="app-left-display" />
        <div className="app-left-main">
          <WeatherDetails data={data} days={days} currentCity={currentCity} />
          <WeatherInfo data={data} days={days} currentCity={currentCity} />
        </div>
      </section>
      <section className="app-right">
        <WeatherForecast data={data} days={days} currentCity={currentCity} />
        <SearchBar
          setData={setData}
          setDays={setDays}
          setCurrentCity={setCurrentCity}
        />
        <CityCards />
      </section>
    </main>
  );
}

export default App;
