import React from 'react'
//UseHistory: Es la versión antugua de useNavigate
import { useNavigate } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'

const cities = [
  {city: "Puntarenas", country: "Costa Rica"},
  {city: "Heredia", country: "Costa Rica"},
  {city: "Cartago", country: "Costa Rica"},
  {city: "Guanacaste", country: "Costa Rica"},
]

const MainPage = () => {
    const navigate = useNavigate()

    const onClickHandler = () => {
      //Cual va a ser la nueva URL
        navigate("/city")
    }

  return (
    <AppFrame>
         <CityList cities={cities} onClickCity={onClickHandler}/>
    </AppFrame>
  )
}

export default MainPage