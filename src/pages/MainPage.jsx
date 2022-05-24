import React from 'react'
//UseHistory: Es la versión antugua de useNavigate
import { useNavigate } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'

const cities = [
  {city: "San Ramón", country: "Costa Rica", countryCode: "CR"},
  {city: "Turrialba", country: "Costa Rica", countryCode: "CR"},
  {city: "Alajuelita", country: "Costa Rica", countryCode: "CR"},
  {city: "Desamparados", country: "Costa Rica", countryCode: "CR"},
]

const MainPage = () => {
    const navigate = useNavigate()

    const onClickHandler = (city, countryCode) => {
      //Cual va a ser la nueva URL
      console.log("city", city)
      console.log("countryCode", countryCode)
      navigate(`/city/${countryCode}/${city}`)
    }

  return (
    <AppFrame>
         <CityList cities={cities} onClickCity={onClickHandler}/>
    </AppFrame>
  )
}

export default MainPage