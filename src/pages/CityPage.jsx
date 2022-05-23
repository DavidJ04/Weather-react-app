import React from 'react'
import CityInfo from '../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from '../components/WeatherDetails/WeatherDetails'
import ForecastChart from '../components/ForecastChart'
import Forecast from './../components/Forecast'
import { Grid } from '@mui/material'
import AppFrame from '../components/AppFrame'

const forecastItemListExample = [
  { hour: 18, state: "cloud", temperature: 17, weekDay: "Jueves" },
  { hour: 7, state: "sunny", temperature: 18, weekDay: "Viernes" },
  { hour: 12, state: "downpour", temperature: 18, weekDay: "Viernes" },
  { hour: 11, state: "snow", temperature: 19, weekDay: "Viernes" },
  { hour: 6, state: "windy", temperature: 17, weekDay: "Sábado" },
  { hour: 13, state: "sunny", temperature: 17, weekDay: "Sábado" }
]

const dataExample = [
  {
      "dayHour": "Jue 18",
      "min": 14,
      "max": 22,
  },
  {
      "dayHour": "Vie 06",
      "min": 18,
      "max": 27,
  },
  {
      "dayHour": "Vie 12",
      "min": 18,
      "max": 28,
  },
  {
      "dayHour": "Vie 18",
      "min": 18,
      "max": 25,
  },
  {
      "dayHour": "Sab 06",
      "min": 15,
      "max": 22,
  },
  {
      "dayHour": "Sab 12",
      "min": 12,
      "max": 19,
  }
]



const CityPage = () => {
  const city = "San Ramón"
  const country = "Costa Rica"
  const state = "sunny"
  const temperature = 20
  const humidity = 80
  const wind = 5
  const data = dataExample
  const forecastItemList = forecastItemListExample
  
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
            <ForecastChart data={data}/>
        </Grid>
        <Grid item>
            <Forecast forecastItemList={forecastItemList}/>
        </Grid>
      </Grid>
      </AppFrame>
  )
}

export default CityPage