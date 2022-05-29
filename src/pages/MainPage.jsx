import React from 'react'
//UseHistory: Es la versión antugua de useNavigate
import { useNavigate } from 'react-router-dom'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'
import { getCities } from '../utils/serviceCities'

const MainPage = ({}) => {
    const navigate = useNavigate()

    const onClickHandler = React.useCallback((city, countryCode) => {
      //Cual va a ser la nueva URL
      navigate(`/city/${countryCode}/${city}`)
    }, [navigate])

  return (
    <AppFrame>
        <CityList cities={getCities()} onClickCity={onClickHandler}/>
    </AppFrame>
  )
}

export default MainPage