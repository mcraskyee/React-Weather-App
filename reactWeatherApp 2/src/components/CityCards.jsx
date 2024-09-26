import React, { Fragment } from "react";
import "../css/CityCards.css";

function CityCards({ citiesWeather }) {
  return (
    <div className="city">
      {Array.isArray(citiesWeather) && citiesWeather.length > 0 ? (
        <Fragment>
          {citiesWeather.map((city, index) =>
            city && city.current && city.current.condition ? (
              <div className="city-item" key={index}>
                <img
                  className="city-item-icon"
                  src={city.current.condition.icon}
                  alt="icon"
                />
                <h3 className="city-item-name">{city.location.name}</h3>
                <p className="city-item-temp">{city.current.temp_c}</p>
              </div>
            ) : (
              <p key={index}>No data available</p>
            )
          )}
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CityCards;
