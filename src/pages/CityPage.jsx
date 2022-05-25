import React from 'react'
import CityInfo from '../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from '../components/WeatherDetails/WeatherDetails'
import ForecastChart from '../components/ForecastChart'
import Forecast from './../components/Forecast'
import { Grid } from '@mui/material'
import AppFrame from '../components/AppFrame'
import useCityPage from '../hooks/useCityPage'

//Permite establecer el idioma en español
import 'moment/locale/es'

const CityPage = () => {

    const { city, data, forecastItemList} = useCityPage()

    const country = "Costa Rica"
    const state = "clear"
    const temperature = 20
    const humidity = 80
    const wind = 5
  
    return (
      <AppFrame>
      <Grid container justifyContent="space-around" direction="column" spacing={2}>
        <Grid item container xs={12} justifyContent="center" alignItems="flex-end" marginTop={4}>
            <CityInfo city={city} country={country}/>
        </Grid>
        <Grid container item xs={12} justifyContent="center">
            <Weather state={state} temperature={temperature}/>
            <WeatherDetails humidity={humidity} wind={wind}/>
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