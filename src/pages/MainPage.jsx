import React from 'react'
//UseHistory: Es la versión antugua de useNavigate
import { useNavigate } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'
import { getCities } from '../utils/serviceCities'

const MainPage = ({onSetAllWeather, allWeather}) => {
    const navigate = useNavigate()

    const onClickHandler = (city, countryCode) => {
      //Cual va a ser la nueva URL
      console.log("city", city)
      console.log("countryCode", countryCode)
      navigate(`/city/${countryCode}/${city}`)
    }

  return (
    <AppFrame>
        <CityList cities={getCities()} onClickCity={onClickHandler} allWeather={allWeather} onSetAllWeather={onSetAllWeather}/>
    </AppFrame>
  )
}

export default MainPage