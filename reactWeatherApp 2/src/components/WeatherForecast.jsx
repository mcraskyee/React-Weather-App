import React, { Fragment } from "react";
import "../css/WeatherForecast.css";
import moment from "moment";

function WeatherForecast(props) {
  //convert data from object to array, and slice the today's weather
  const forecastDays =
    props.currentCityFuture && props.currentCityFuture.forecast
      ? props.currentCityFuture.forecast.forecastday.slice(1)
      : [];
  console.log("forecastDays", forecastDays);

  //map before confirming forecastDays is an effect array
  return (
    <div className="forecast">
      {Array.isArray(forecastDays) && forecastDays.length > 0 ? (
        <Fragment>
          {forecastDays.map((futureDay) => (
            <div className="forecast-item" key={futureDay.date}>
              <h3 className="forecast-item-week">
                {moment(futureDay.date).format("dddd")}
              </h3>
              <p className="forecast-item-date">
                {moment(futureDay.date).format("DD MMMM")}
              </p>
              {futureDay.day && futureDay.day.condition && (
                <Fragment>
                  <img
                    className="forecast-item-icon"
                    src={futureDay.day.condition.icon}
                    alt="icon"
                  />
                  <p className="forecast-item-temp">{`${futureDay.day.mintemp_c}~${futureDay.day.maxtemp_c}°`}</p>
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
