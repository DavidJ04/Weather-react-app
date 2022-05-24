import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
//Importación de Grid
import { Grid, ListItem, List, Alert } from '@mui/material'
import CityInfo from './../CityInfo'
import Weather from './../Weather'
//Convertir unidades
import convertUnits from 'convert-units'

const getCityCode = (city, countryCode) => `${city}-${countryCode}`

//li: item de una lista
//renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventOnClickCity => (CityAndCountry, weather) => {
  const { city, countryCode ,country } = CityAndCountry
  //  const { temperature, state} = weather

  return (
    <ListItem button key={getCityCode(city, countryCode)} onClick={() => eventOnClickCity(city, countryCode)}>

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

}

//Hooks personalizados:
const useCityList = (cities) => {
  /*
  AllWeather, estructura: [San Ramón-Costa Rica]: { temperature: 10, state: "sunny"}
   */

  //Elemento que va a manejar todos los climas de cada ciudad
  const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const setWeather = async (city, countryCode) => { //El async la convierte en un "promise"
      const appid = "45a95b44d7dda1599d68e3c6076c4327"
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`

      try {

        const response = await axios.get(url)

        const { data } = response
        const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
        const state = data.weather[0].main.toLowerCase()

        const propName = getCityCode(city, countryCode)
        const propValue = { temperature, state }

        setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))

      } catch (error) {
        if (error.response) {  //Errores que nos responde el server
          setError("Ha ocurrido un error en el servidor del clima o con el internet")
        } else if (error.request) {  //Errores que suceden por no llegar al server
          setError("Verifique la conexión a internet")
        }
        else { //Errores imprevistos
          setError("Error al cargar los datos")
        }
      }

      //Promise
      /*
      .then(response => {
        
        const {data} = response
        //De Kelvin a Centigrados
        const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
        const state = data.weather[0].main.toLowerCase()
        const propName = `${city}-${country}` // Ejem: [San Ramón-Costa Rica]
        const propValue = { temperature, state}  //Ejem: { temperature: 10, state: "sunny"}
  
        console.log("propName", propName)
        console.log("propValue", propValue)
        
        allWeather 1er pasada: [San Ramón-Costa Rica]: { temperature: 10, state: "sunny"}
  
        allWeather 2da pasada: [Alajuelita-Costa Rica]: { temperature: 13, state: "cloud"}
        -La segunda pasada agarra el valor que se le envie por segunda vez, en pocas palabras, se suma al valor anterior.
        
        
  
        //Asi nos aseguramos que tome el valor anterior
        setAllWeather(allWeather => ({...allWeather, [propName]: propValue }))
      })
     */
    }


    cities.forEach(({ city, countryCode }) => {
      setWeather(city, countryCode)
    });

  }, [cities])

  return {allWeather, error, setError}

}

//cities: es un array, y en cada item tiene que tener la ciudad y tambien el country
//ul: tag html para listas no ordenadas
const CityList = ({ cities, onClickCity }) => {
  const {allWeather, error, setError} = useCityList(cities)
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

export default CityList