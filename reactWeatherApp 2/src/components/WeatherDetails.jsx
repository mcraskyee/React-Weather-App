import React, { Fragment } from "react";
import "../css/WeatherDetails.css";

function WeatherDetails({ data }) {
  return (
    <div className="details">
      {data ? (
        <Fragment>
          <h3 className="details-city">{data.location.name}</h3>
          <h1 className="details-temp">{data.current.temp_c}°</h1>
          <p className="details-range">{`${data.current.windchill_c}~${data.current.feelslike_c}°`}</p>
          <div>
            <img
              className="details-icon"
              src={data.current.condition.icon}
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
