import React, { Fragment } from "react";
import "../css/WeatherDetails.css";
import { getWeatherIcon } from "../services/weatherMap.js";

function WeatherDetails({ currentCityWeather }) {
  if (!currentCityWeather || !currentCityWeather.current) {
    return <p>Loading...</p>;
  }

  const customIcon = getWeatherIcon(currentCityWeather.current.condition.text);
  const iconSrc = customIcon
    ? `photos/${customIcon}`
    : currentCityWeather.current.condition.icon;

  return (
    <div className="details">
      <Fragment>
        <p className="details-state-region">
          {currentCityWeather.location.region}
        </p>
        <p className="details-state-country">
          {currentCityWeather.location.country}
        </p>
        <h3 className="details-city">{currentCityWeather.location.name}</h3>
        <h1 className="details-temp">{currentCityWeather.current.temp_c}°</h1>
        <p className="details-range">{`${currentCityWeather.current.windchill_c}~${currentCityWeather.current.feelslike_c}°`}</p>
        <div>
          <img className="details-icon" src={iconSrc} alt="icon" />
        </div>
      </Fragment>
    </div>
  );
}

export default WeatherDetails;
