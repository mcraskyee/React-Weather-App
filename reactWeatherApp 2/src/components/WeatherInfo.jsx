import React, { Fragment } from "react";
import "../css/WeatherInfo.css";

function WeatherInfo(props) {
  return (
    <div className="infos">
      {props.currentCityWeather ? (
        <Fragment>
          <div className="infos-group">
            <span className="infos-icon material-symbols-outlined">air</span>
            <p>{props.currentCityWeather.current.wind_mph}km/h</p>
          </div>
          <div className="infos-group">
            <span className="infos-icon material-symbols-outlined">
              device_thermostat
            </span>
            <p>{props.currentCityWeather.current.temp_c}°</p>
          </div>
          <div className="infos-group">
            <span className="infos-icon material-symbols-outlined">
              humidity_percentage
            </span>
            <p>{props.currentCityWeather.current.humidity}%</p>
          </div>
          <div className="infos-group">
            <span className="infos-icon material-symbols-outlined">
              lens_blur
            </span>
            <p>{props.currentCityWeather.current.air_quality.pm2_5}µg</p>
          </div>
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherInfo;
