import React, { Fragment } from "react";
import "../css/WeatherForecast.css";
import moment from "moment";

function WeatherForecast({ data }) {
  return (
    <div className="forecast">
      {data ? (
        <Fragment>
          <div className="forecast-item" key={data.current.is_day}>
            <h3 className="forecast-item-week">{moment().format("dddd")}</h3>
            <p className="forecast-item-date">{moment().format("DD MMMM")}</p>
            <img
              className="forecast-item-icon"
              src={data.current.condition.icon}
              alt="icon"
            />
            <p className="forecast-item-temp">{`${data.current.windchill_c}~${data.current.feelslike_c}°`}</p>
          </div>
          <div className="forecast-item" key={data.current.is_day}>
            <h3 className="forecast-item-week">{moment().format("dddd")}</h3>
            <p className="forecast-item-date">{moment().format("DD MMMM")}</p>
            <img
              className="forecast-item-icon"
              src={data.current.condition.icon}
              alt="icon"
            />
            <p className="forecast-item-temp">{`${data.current.windchill_c}~${data.current.feelslike_c}°`}</p>
          </div>
          <div className="forecast-item" key={data.current.is_day}>
            <h3 className="forecast-item-week">{moment().format("dddd")}</h3>
            <p className="forecast-item-date">{moment().format("DD MMMM")}</p>
            <img
              className="forecast-item-icon"
              src={data.current.condition.icon}
              alt="icon"
            />
            <p className="forecast-item-temp">{`${data.current.windchill_c}~${data.current.feelslike_c}°`}</p>
          </div>
          <div className="forecast-item" key={data.current.is_day}>
            <h3 className="forecast-item-week">{moment().format("dddd")}</h3>
            <p className="forecast-item-date">{moment().format("DD MMMM")}</p>
            <img
              className="forecast-item-icon"
              src={data.current.condition.icon}
              alt="icon"
            />
            <p className="forecast-item-temp">{`${data.current.windchill_c}~${data.current.feelslike_c}°`}</p>
          </div>
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherForecast;
