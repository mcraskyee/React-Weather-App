import React, { Fragment } from "react";
import "../css/CityCards.css";
import { getWeatherIcon } from "../services/weatherMap.js";

function CityCards({ citiesWeather, onCityClick }) {
  // always keep show 4 cities
  const displayedCitiesWeather = citiesWeather.slice(0, 4);

  return (
    <div className="city">
      {Array.isArray(displayedCitiesWeather) &&
      displayedCitiesWeather.length > 0 ? (
        <Fragment>
          {displayedCitiesWeather.map((city, index) => {
            const customIcon = getWeatherIcon(city.current.condition.text);
            const iconSrc = customIcon
              ? `photos/${customIcon}`
              : city.current.condition.icon;
            return (
              <div
                className="city-item"
                key={index}
                onClick={() => onCityClick(city.location.name)}
              >
                <img className="city-item-icon" src={iconSrc} alt="icon" />
                <h3 className="city-item-name">{city.location.name}</h3>
                <p className="city-item-temp">{city.current.temp_c}°</p>
              </div>
            );
          })}
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CityCards;
