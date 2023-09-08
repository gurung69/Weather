import React from "react";
import './Info.css'

export function Info(){
  return (
    <div className="info">
      <div className="city">Saskatoon</div>       
      <div className="temp-div">
        <img alt="weather icon" src="https://openweathermap.org/img/wn/11d@2x.png"></img>
        <span className="temp">23</span>&nbsp;°C
      </div>
      <div>Humidity: <span className="humidity">8</span>&nbsp;%</div>
      <div>Feels like: <span className="feels-like">23</span>°C</div>
    </div>
  )
} 