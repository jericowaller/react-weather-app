import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({})
  var location = ""
  const API_KEY = { API_KEY }

  const getData = (key, loc) => {
    if (key === 'Enter') {
      location = loc
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=imperial`
      console.log(url)
      fetch(url).then((response) => response.json())
        .then((response) => {
          setData(response)
          console.log(response)
        })
    }
  }


  return (
    <div className="App">
      <div className="App-search">
        <input
          type='text'
          onKeyDown={(key) => getData(key.key, key.target.value)}
          placeholder={'Search for location...'}
        />
      </div>
      {data.main && <div className='body'>
        <div className="main-element-wrapper">
          <div className="main-elements">
            <div className="city">
              <p>{data.name}</p>
            </div>
            <div className='main-temp'>
              <p>{data.main.temp.toFixed()}°F</p>
            </div>
            <div className='feels'>
              <p>Feels like: {data.main.feels_like.toFixed()}°F</p>
            </div>
          </div>
        </div>
        <div className='secondary-element-wrapper'>
          <div className='secondary-elements'>
            <div className='weather-type'>
              <p>Current weather: {data.weather[0].main}</p>
            </div>
            <div className='humidity'>
              <p>Humidity: {data.main.humidity}%</p>
            </div>
            <div className='wind-speed'>
              <p>Wind speed: {data.wind.speed} MPH</p>
            </div>
            <div className=''></div>
          </div>
        </div>
      </div>
      }
    </div>
  );
}

export default App;

