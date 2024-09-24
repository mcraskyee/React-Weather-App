import React, { Fragment, useEffect } from "react";
import "../css/WeatherForecast.css";
import fetchWeather from "../services/weatherApis";
import moment from "moment";

function WeatherForecast({ data, currentCity, setData }) {
  const days = 5;
  useEffect(() => {
    fetchWeather(currentCity, days, setData);
  }, [currentCity, setData]);

  const forecastDays = data && data.forecast ? data.forecast.forecastday : [];

  return (
    <div className="forecast">
      {Array.isArray(forecastDays) && forecastDays.length > 0 ? (
        <Fragment>
          {forecastDays.map((dayData) => (
            <div className="forecast-item" key={dayData.date}>
              <h3 className="forecast-item-week">
                {moment(dayData.date).format("dddd")}
              </h3>
              <p className="forecast-item-date">
                {moment(dayData.date).format("DD MMMM")}
              </p>
              {dayData.day && dayData.day.condition && (
                <Fragment>
                  <img
                    className="forecast-item-icon"
                    src={dayData.day.condition.icon}
                    alt="icon"
                  />
                  <p className="forecast-item-temp">{`${dayData.day.mintemp_c}~${dayData.day.maxtemp_c}°`}</p>
                </Fragment>
              )}
            </div>
          ))}
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherForecast;
