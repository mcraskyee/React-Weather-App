import React, { Fragment } from "react";
import "../css/WeatherForecast.css";
import moment from "moment";
import { getWeatherIcon } from "../services/weatherMap.js";

function WeatherForecast({ currentCityFuture }) {
  //convert data from object to array, and slice the today's weather
  const forecastDays =
    currentCityFuture && currentCityFuture.forecast
      ? currentCityFuture.forecast.forecastday.slice(1)
      : [];

  //map before confirming data (forecastDays) is an effective array
  return (
    <div className="forecast">
      {Array.isArray(forecastDays) && forecastDays.length > 0 ? (
        <Fragment>
          {forecastDays.map((futureDay) => {
            // 添加日志来检查每一天的 condition.text 值
            console.log(futureDay.day.condition.text);

            // 获取自定义图标路径
            const customIcon = getWeatherIcon(futureDay.day.condition.text);
            // 使用自定义图标路径或默认图标路径
            const iconSrc = customIcon
              ? `photos/${customIcon}`
              : futureDay.day.condition.icon;

            return (
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
                      src={iconSrc}
                      alt="icon"
                    />
                    <p className="forecast-item-temp">{`${futureDay.day.mintemp_c}~${futureDay.day.maxtemp_c}°`}</p>
                  </Fragment>
                )}
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

export default WeatherForecast;
