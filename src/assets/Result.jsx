import React, { useEffect, useState } from 'react'

function Result({ city }) {
  const [weatherData, setWeatherData] = useState(null)
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
        )
        if(response.status>=200 && response.status<=300){
          const data = await response.json()
          setWeatherData(data)
        }
        else{
          setWeatherData(null)
        }
       
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }
    if (city) fetchWeatherData()
  }, [city])
 

  return (
    <div>
      <h1>Weather Info for {city}</h1>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.main?.temp} °C</p>
          <p>Weather: {weatherData.weather?.[0]?.description}</p>
        </div>
      ) : (
        <p>Fetching weather information...<span className='text-danger'>City Not Found</span></p>
      )}
    </div>
  )
}

export default Result
