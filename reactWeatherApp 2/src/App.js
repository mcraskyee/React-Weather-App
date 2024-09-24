import "./App.css";
import { React, useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherForecast from "./components/WeatherForecast.jsx";
import CityCards from "./components/CityCards.jsx";
import WeatherDetails from "./components/WeatherDetails.jsx";
import WeatherInfo from "./components/WeatherInfo.jsx";
import DisplayTime from "./components/DisplayTime.jsx";

function App() {
  const [data, setData] = useState("");
  const [currentCity, setCurrentCity] = useState("Brisbane");

  return (
    <main className="App">
      <section className="app-left">
        <DisplayTime className="app-left-display" />
        <div className="app-left-main">
          <WeatherDetails
            data={data}
            setData={setData}
            currentCity={currentCity}
          />
          <WeatherInfo
            data={data}
            setData={setData}
            currentCity={currentCity}
          />
        </div>
      </section>
      <section className="app-right">
        <WeatherForecast
          data={data}
          setData={setData}
          currentCity={currentCity}
        />
        <SearchBar setData={setData} setCurrentCity={setCurrentCity} />
        <CityCards />
      </section>
    </main>
  );
}

export default App;
