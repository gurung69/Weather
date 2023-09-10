import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

import { Form } from './components/Form/Form';
import { Info } from './components/Info/Info';

function App() {

  const [weatherInfo, setWeatherInfo] = useState(null);
  const [location, setLocation] = useState('');

  //keys
  const openweather_key = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const opencage_key = process.env.REACT_APP_OPENCAGE_API_KEY;

  async function weather(location){

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid="+openweather_key+"&units=metric";
    //fetch data
    try{
      const response = await axios.get(url)
      setWeatherInfo(response.data)

      setLocation(location)
    } 
    catch(error){
      console.log(error);
    };
  };

  // get users current location weather
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      
      // get user's city name
      const url = "https://api.opencagedata.com/geocode/v1/json?q=+"+lat+"+"+lng+"&key="+opencage_key;
      try{
        axios.get(url)
        .then(response=>{
          setLocation(response.data.results[0].components.city)
          weather(response.data.results[0].components.city)
  
        })
      }
      catch(error){
        console.log(error)
      }
    });
  }, []);
  

  return (
    <div className="App">
      <Form 
      fetchWeather={weather}
      />
      <Info
      location={location}
      weatherInfo={weatherInfo}
      />
    </div>
  );
}

export default App;
