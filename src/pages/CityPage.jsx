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
import {useWeatherDispatchContext, useWeatherStateContext} from '../WeatherContext'

//Permite establecer el idioma en español
import 'moment/locale/es'

const CityPage = () => {

    const actions = useWeatherDispatchContext()
    const dataMe = useWeatherStateContext()  

    const { allWeather, allData, allForecastItemList } = dataMe
    //const { onSetAllWeather, onSetData, onSetForecastItemList } = actions
    
    const { city, countryCode} = useCityPage(allData, allForecastItemList, actions)

    //Cuando cambie city y countrycode; va a retornar una nueva instancia del objeto, osea no siempre, solo cuando cambien.
    const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode])
    //const cities = useCallback((city, countryCode) => { onSetAllWeather((city, countryCode ) => [ city, countryCode ])} , [city, countryCode])

    useCityList(cities, allWeather, actions)

    const cityCode = getCityCode(city, countryCode)

    const weather = allWeather[cityCode]
    const data = allData[cityCode]
    const forecastItemList = allForecastItemList[cityCode]

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