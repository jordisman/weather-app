import React from "react";

const Weather = (props) => {
  console.log('weather props', props);
return (

  <div className="weather-details">
    {
      props.city && props.country &&
      <p className="weather-key">
        Location:
        <span className="weather-value">
          {props.city}, {props.country}
        </span>
      </p>
    }
    {
      props.description &&
      <p className="weather-key">
        Conditions:
        <span className="weather-value">
          {props.description}
        </span>
      </p>
    }

    {
      props.temperature &&
      <p className="weather-key">
        Temperature:
        <span className="weather-value">
          {props.temperature}
        </span>
      </p>
    }
    {
      props.tempMax &&
      <p className="weather-key">
        Max Temperature:
        <span className="weather-value">
          {props.tempMax}
        </span>
      </p>
    }
    {
      props.tempMin &&
      <p className="weather-key">
        Min Temperature:
        <span className="weather-value">
          {props.tempMin}
        </span>
      </p>
    }
    {
      props.humidity &&
      <p className="weather-key">
        Humidity:
        <span className="weather-value">
          {props.humidity}
        </span>
      </p>
    }
    {
      props.wind &&
      <p className="weather-key">
        Wind Speed:
        <span className="weather-value">
          {props.wind}
        </span>
      </p>
    }
    {
      props.pressure &&
      <p className="weather-key">
        Pressure:
        <span className="weather-value">
          {props.pressure}
        </span>
      </p>
    }
    {
      props.error &&
      <p className="weather-error">
        {props.error}
      </p>
    }
  </div>
)};

export default Weather;