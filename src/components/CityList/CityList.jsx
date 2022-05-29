import React from 'react'
import PropTypes from 'prop-types'
import { Grid, ListItem, List, Alert } from '@mui/material'
//Usa el hook que se creo en UseCityList(se llama igual que el hook)
import useCityList from '../../hooks/useCityList'
import CityInfo from './../CityInfo'
import Weather from './../Weather'
import { getCityCode } from '../../utils/utils'
import { useWeatherDispatchContext, useWeatherStateContext} from '../../WeatherContext'

/*
const areEqual = (prev, next) => {
      debugger
      //Hace una comparacion de ambos estados y verifica los cambios en la renderización
      console.log("city", prev.city === next.cities)
      console.log("countryCode", prev.countryCode === next.countryCode)
      console.log("country", prev.country === next.country)
      console.log("weather", prev.weather === next.weather)
      console.log("eventOnClickCity", prev.eventOnClickCity === next.eventOnClickCity)

      return false

}
*/

const CityListItem = React.memo(({city, countryCode ,country, weather, eventOnClickCity }) => {

  return (
    <ListItem button onClick={() => eventOnClickCity(city, countryCode)}>

      <Grid container
        justifyContent="center"
        alignItems="center"
      >
        <Grid item
          //8 columnas de sm en adelante, cuando la resolución sea menor a sm va a ocupar 12 columnas
          md={8}
          xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>

        <Grid item
          md={3}
          xs={12}>
          {                            //Verifica si viene indefinido
            <Weather temperature={weather && weather.temperature} state={weather && weather.state} />
          }
        </Grid>

      </Grid>

    </ListItem>
  )
}//, areEqual
)

CityListItem.displayName = "CityListItem"

//li: item de una lista
//renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventOnClickCity => (CityAndCountry, weather) => {
  const { city, countryCode } = CityAndCountry
  //  const { temperature, state} = weather

 return <CityListItem key={getCityCode(city, countryCode)} eventOnClickCity={eventOnClickCity} weather={weather} {...CityAndCountry}/>

}

//cities: es un array, y en cada item tiene que tener la ciudad y tambien el country
//ul: tag html para listas no ordenadas
const CityList = ({ cities, onClickCity }) => {

  const actions = useWeatherDispatchContext()
  const dataMe = useWeatherStateContext()  

  const { allWeather } = dataMe
  //const { onSetAllWeather } = actions
  
  const {error, setError} = useCityList(cities, allWeather,  actions)
  //const weather = { temperature: 10, state: "sunny" }

  return (
    <div>
      {
        error && <Alert onClose={() => setError(null)} severity="error">{error}</Alert>
      }
      <List>
        {
          cities.map(CityAndCountry => renderCityAndCountry(onClickCity)(CityAndCountry, allWeather[getCityCode(CityAndCountry.city, CityAndCountry.countryCode)]))
        }
      </List>
    </div>
  )
}

//Como mejorar esta validacion?
CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({ city: PropTypes.string.isRequired, country: PropTypes.string.isRequired, countryCode: PropTypes.string.isRequired })).isRequired,
  onClickCity: PropTypes.func.isRequired
}

//CityList.displayName = "CitySuperList"

export default React.memo(CityList)