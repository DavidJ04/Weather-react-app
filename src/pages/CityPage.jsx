import React, {useMemo} from 'react'
import CityInfo from '../components/CityInfo'
//Indicador de progreso
import { LinearProgress } from '@mui/material'
import Weather from './../components/Weather'
import WeatherDetails from '../components/WeatherDetails/WeatherDetails'
import ForecastChart from '../components/ForecastChart'
import Forecast from './../components/Forecast'
import { Grid } from '@mui/material'
import AppFrame from '../components/AppFrame'

import useCityPage from '../hooks/useCityPage'
import useCityList from '../hooks/useCityList'
import { getCityCode } from '../utils/utils'
import { getCountryNameByCountryCode } from '../utils/serviceCities'

//Permite establecer el idioma en español
import 'moment/locale/es'

const CityPage = ({onSetAllWeather, allWeather}) => {

    const { city ,countryCode, data, forecastItemList} = useCityPage()

    //Cuando cambie city y countrycode; va a retornar una nueva instancia del objeto, osea no siempre, solo cuando cambien.
    const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode])

    useCityList(cities, onSetAllWeather)

    const weather = allWeather[getCityCode(city, countryCode)]

    const country = countryCode && getCountryNameByCountryCode(countryCode)
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind

    const state = weather && weather.state
    const temperature = weather && weather.temperature
  
    return (
      <AppFrame>
      <Grid container justifyContent="space-around" direction="column" spacing={2}>
        <Grid item container xs={12} justifyContent="center" alignItems="flex-end" marginTop={4}>
            <CityInfo city={city} country={country}/>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
            <Weather state={state} temperature={temperature}/>
            {
            humidity && wind && <WeatherDetails humidity={humidity} wind={wind}/>
            }
        </Grid>
        <Grid item>
            {!data && !forecastItemList && <LinearProgress/>}
        </Grid>
        <Grid item>
           { 
            data && <ForecastChart data={data}/>
           }
        </Grid>
        <Grid item>
            {
             forecastItemList && <Forecast forecastItemList={forecastItemList}/>
            }
        </Grid>
      </Grid>
      </AppFrame>
  )
}

export default CityPage