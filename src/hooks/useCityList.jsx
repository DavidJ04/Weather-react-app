import { useState, useEffect } from 'react'
import axios from 'axios'
//Convertir unidades
import { getCityCode } from '../utils/utils'
import convertUnits from 'convert-units'
import { getWeatherUrl } from '../utils/urls'

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
  
        const url = getWeatherUrl({city, countryCode}) 

        try {
  
          const response = await axios.get(url)
  
          const { data } = response
          const temperature = Number(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
          //const stateFromServer = data.weather[0].main.toLowerCase()
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

  //Se exporta a City List
  export default useCityList