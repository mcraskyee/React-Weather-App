import React, { Fragment } from "react";
import "../css/CityCards.css";

function CityCards({ citiesWeather }) {
  // always keep show 4 cities
  const displayedCitiesWeather = citiesWeather.slice(0, 4);

  return (
    <div className="city">
      {Array.isArray(displayedCitiesWeather) &&
      displayedCitiesWeather.length > 0 ? (
        <Fragment>
          {displayedCitiesWeather.map((city, index) => (
            <div className="city-item" key={index}>
              <img
                className="city-item-icon"
                src={city.current.condition.icon}
                alt="icon"
              />
              <h3 className="city-item-name">{city.location.name}</h3>
              <p className="city-item-temp">{city.current.temp_c}</p>
            </div>
          ))}
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CityCards;
