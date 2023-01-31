/*
 * @Author: Frank Chu
 * @Date: 2023-01-30 22:34:03
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-31 14:00:48
 * @FilePath: /fullstackopen/part2/countries/src/App.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */

import { useState, useEffect } from 'react'
import SearchPartView from './components/SearchPartView'
import NotificationView from './components/NotificationView'

import CountriesSearch from './services/countriesSearch'
import WeatherServices from './services/openweatherApi'

function App() {
  const [countriesResults, setCountriesResults] = useState([])
  const [error, setError] = useState(false)

  const handleChanges = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setError(false)
    
    CountriesSearch
      .getAll(event.target.value)
      .then((result) => {
        setCountriesResults(result.data)
      }).catch((err) => {
        console.log(err)
        setError(true)
      });
  }

  return (
    <div className="App">
      <div>
        <SearchPartView handleChanges={handleChanges}/>
        <NotificationView notification={error}/>
        <CountriesPartView countries={countriesResults}/>
      </div>
    </div>
  );
}

const CountriesPartView = ({countries}) => {
  if (countries === undefined) {
    return null
  }
  if (countries.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }

  return (
    <div>
      {countries.map((country) => {
        return (
            <CountryView key={country.name.common} country={country} length={countries.length}/>
        )
      })
      }
    </div>
  )
}

const CountryView = ({ country, length }) => {
  const [show, setShow] = useState(false)
  if (length !== 1 && show === false) {
    return (
      <div>
        {country.name.common} <button onClick={() => {setShow(true)}}>show</button>
      </div>
    )
  }
  return (
    <>
      <h1>{country.name.common}</h1>
      <div>
        capital {country.capital} <br/>
        area {country.area}
      </div>
      <h2>languages:</h2>
      <ul>
        {Object.keys(country.languages).map((language) => {
          return (
            <li key={language}>
              {country.languages[language]}
            </li>
          )
        })
        }
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h2>Weather in {country.capital}</h2>
      <WeatherView capital={country.capital}/>
    </>
  )
}

const WeatherView = ({capital}) => {
  const [temp, setTemp] = useState(0)
  const [wind, setWind] = useState(0)
  const [weather, setWeather] = useState({icon: '', description: '', temp: 0, wind: 0})

  useEffect(() => {
    WeatherServices.getWeather(capital).then((result) => {
      setTemp(result.data.main.temp - 273.15)
      setWind(result.data.wind.speed)
      const data = result.data
      setWeather({
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        description: data.weather[0].description,
        temp: data.main.temp,
        wind: data.wind.speed
      })
    })
  }, [capital])
  return (
    <div>
      temperature in {capital}: {temp.toFixed(1)} C° <br/>
      <img src={weather.icon} alt={weather.description} /> <br/>
      wind {wind} m/s
    </div>
  )
}

export default App;
