import React, {useState, useEffect} from 'react'
import CityInfo from '../components/CityInfo'
import Weather from './../components/Weather'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import WeatherDetails from '../components/WeatherDetails/WeatherDetails'
import ForecastChart from '../components/ForecastChart'
import Forecast from './../components/Forecast'
import { Grid } from '@mui/material'
import AppFrame from '../components/AppFrame'
import moment from 'moment'


const forecastItemListExample = [
  { hour: 18, state: "clouds", temperature: 17, weekDay: "Jueves" },
  { hour: 7, state: "clear", temperature: 18, weekDay: "Viernes" },
  { hour: 12, state: "drizzle", temperature: 18, weekDay: "Viernes" },
  { hour: 11, state: "snow", temperature: 19, weekDay: "Viernes" },
  { hour: 6, state: "rain", temperature: 17, weekDay: "Sábado" },
  { hour: 13, state: "thunderstorm", temperature: 17, weekDay: "Sábado" }
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

  const [data, setData] = useState(null)
  const [forecastItemList, setForecastItemList] = useState(null)

  //Toma los parametros que se estan enviando 
  const { city, countryCode } = useParams()

  useEffect( () => {

    const getForecast = async () => {

    const appid = "45a95b44d7dda1599d68e3c6076c4327"
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`

    try {
        const response = await axios.get(url)

        console.log("data", data)

        const daysAhead = [0,1,2,3,4,5]
        const days = daysAhead.map(d => moment().add(d, 'd'))
        const dataAux = days.map(d => {
            return ({
                dayHour: d.format('ddd'),
                min: 10,
                max: 30
            })
        })

        setData(dataAux)
        setForecastItemList(forecastItemListExample)

    } catch (error) {
        console.log(error)
    }
    
}

getForecast()

  }, [data, forecastItemList])
  
  //const city = "San Ramón"
  const country = "Costa Rica"
  const state = "clear"
  const temperature = 20
  const humidity = 80
  const wind = 5
 // const data = dataExample
 //const forecastItemList = forecastItemListExample
  
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