import { useState } from 'react'
import './App.css'
import Result from './assets/Result'

function App() {
  const [city, setCity] = useState('')
  const [validate, setValidate] = useState(false)
  const [submittedCity, setSubmittedCity] = useState('') // To store the city on button click
  const handleInputChange = (e) => {
    setCity(e.target.value)
  }

  const handleSubmission = () => {
    if(!city){
     setValidate(true)
    }
    else{
      setValidate(false)
      setSubmittedCity(city)
     
    }
  }

  return (
    <>
      <div className='bg-success bg-opacity-50 text-white' style={{ height: '100vh', width: '100%' }}>
        <h2 className='text-start'>
          Weather Updates<i className='fa-solid fa-cloud-sun-rain'></i>
        </h2>
        <div
          className='text-center d-flex flex-column justify-content-around align-items-center'
          style={{ width: '50%', margin: '50px 25%' }}
        >
          <input
            type='text'
            placeholder='Enter city name'
            id='city'
            className='form-control pt-2 mt-3'
            onChange={handleInputChange}
          />
          {validate && <p>Please enter city name!!</p>}
          <button
            type='submit'
            onClick={handleSubmission}
            className='btn btn-outline-success pt-2 mt-3 text-white'
          >
            Result
          </button>
        
          {setSubmittedCity && <Result city={submittedCity} />}
        </div>
      </div>
    </>
  )
}

export default App
