import React, { Fragment } from "react";
import "../css/WeatherDetails.css";
//🌹🌹
import { getWeatherIcon } from "../services/weatherMap.js";

function WeatherDetails({ currentCityWeather }) {
  return (
    <div className="details">
      {currentCityWeather && currentCityWeather.current ? (
        <Fragment>
          <p className="details-state-country">{`${currentCityWeather.location.region}, ${currentCityWeather.location.country}`}</p>
          <h3 className="details-city">{currentCityWeather.location.name}</h3>
          <h1 className="details-temp">{currentCityWeather.current.temp_c}°</h1>
          <p className="details-range">{`${currentCityWeather.current.windchill_c}~${currentCityWeather.current.feelslike_c}°`}</p>
          <div>
            <img
              className="details-icon"
              src={`photos/${getWeatherIcon(
                currentCityWeather.current.condition.text
              )}`}
              alt="icon"
            />
          </div>
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherDetails;
