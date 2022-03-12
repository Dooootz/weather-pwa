// import React & useState hook from React
import React, { useState } from 'react'

// import API logic 
import { fetchWeather } from './api/fetchWeather'
// import styles 
import './App.css'

// This is our main functional component 
const App = () => {

    // destructure our data coming from useState
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    // async search function which excepts an event 
    // check if the event.key = 'Enter' key 
    const search = async (e) => {
        if(e.key === 'Enter') {
            // instantiate variable 'data' which = our API call 
            // pass the query of our search as a parameter 
            const data = await fetchWeather(query)
            
            setWeather(data);
            setQuery('')
        }
    }

  return (
    <div className='main-container'>
        <input 
            type="text" 
            className='search' 
            placeholder='Search...'
            // query value = useState 
            value={query}
            // onChange we useState to dynamically set our query
            onChange={(e) => setQuery(e.target.value)}
            // onKeyPress - we will call our search function
            onKeyPress={search}
        />
        {/* // AND operator 
        // if weather.main is true... then show the proceeding code
        // else do nothing */}
        {weather.main && (
            <div className='city'>
                <h2 className='city-name'>
                    <span>{weather.name}</span>
                    <sup>{weather.sys.country}</sup>
                </h2>
                <div className='city-temp'>
                    {Math.round(weather.main.temp)}
                    <sup>&deg;C</sup>
                </div>
                <div className='info'>
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                    <p>{weather.weather[0].description}</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default App