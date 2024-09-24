import React, { Fragment } from "react";
import "../css/WeatherInfo.css";

function WeatherInfo({ data }) {
  return (
    <div className="infos">
      {data ? (
        <Fragment>
          <div className="infos-group">
            <span className="infos-icon material-symbols-outlined">air</span>
            <p>{data.current.wind_mph}km/h</p>
          </div>
          <div className="infos-group">
            <span className="infos-icon material-symbols-outlined">
              device_thermostat
            </span>
            <p>{data.current.temp_c}°</p>
          </div>
          <div className="infos-group">
            <span className="infos-icon material-symbols-outlined">
              humidity_percentage
            </span>
            <p>{data.current.humidity}%</p>
          </div>
          <div className="infos-group">
            <span className="infos-icon material-symbols-outlined">
              lens_blur
            </span>
            <p>{data.current.air_quality.pm2_5}µg</p>
          </div>
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherInfo;
