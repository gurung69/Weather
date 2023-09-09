import React from "react";
import './Info.css'

export function Info(props){
  
  if (props.weatherInfo == null){
    return null
  }

  const {main, weather} = props.weatherInfo;

  
  return (
    <div className="info">
      <div className="city">{props.location}</div>       
      <div className="temp-div">
        <img alt="weather icon" src={"https://openweathermap.org/img/wn/"+weather[0].icon+"@2x.png"}></img>
        <span className="temp">{main.temp}</span>&nbsp;°C
      </div>
      <div>Humidity: <span className="humidity">{main.humidity}</span>&nbsp;%</div>
      <div>Feels like: <span className="feels-like">{main.feels_like}</span>°C</div>
    </div>
  )
} 