import React, { Fragment } from "react";
import "../css/WeatherDetails.css";

function WeatherDetails(props) {
  return (
    <div className="details">
      {props.currentCityWeather ? (
        <Fragment>
          <p className="details-state-country">{`${props.currentCityWeather.location.region}, ${props.currentCityWeather.location.country}`}</p>
          <h3 className="details-city">
            {props.currentCityWeather.location.name}
          </h3>
          <h1 className="details-temp">{props.currentCityWeather.temp_c}°</h1>
          <p className="details-range">{`${props.currentCityWeather.current.windchill_c}~${props.currentCityWeather.current.feelslike_c}°`}</p>
          <div>
            <img
              className="details-icon"
              src={props.currentCityWeather.current.condition.icon}
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
