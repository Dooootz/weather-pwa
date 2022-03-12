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
            
            console.log(data)
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
    </div>
  )
}

export default App