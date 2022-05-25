import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import { getForecastUrl } from '../utils/urls'
import convertUnits from 'convert-units'

const useCityPage = () => {
    
    const [data, setData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)
  
    //Toma los parametros que se estan enviando 
    const { city, countryCode } = useParams()
  
    useEffect( () => {
  
      const getForecast = async () => {

      const url = getForecastUrl({city, countryCode})
  
      try {
          const { data } = await axios.get(url)

          //Convierta a grados celsius
          const toCelsius = (temp) => Number(convertUnits(temp).from("K").to("C").toFixed(0))
  
          console.log("data", data)
  
          //Dias
          const daysAhead = [0,1,2,3,4,5]
          const days = daysAhead.map(d => moment().add(d, 'd'))
          const dataAux = days.map(day => {
  
              //Temperatura
              const tempObjArray = data.list.filter(item => {
                    const dayOfYear = moment.unix(item.dt).dayOfYear()
                    return dayOfYear === day.dayOfYear()
              })
  
              //Se obtiene la temperatura
              const temps = tempObjArray.map(item => item.main.temp)
  
              //Dias
              return ({
                  dayHour: day.format('ddd'),
                  //Extrae los valores maximos y minimos
                  min: toCelsius(Math.min(...temps)),
                  max: toCelsius(Math.max(...temps)),
                  //Cuando posea más de un elemento va a ser verdadero
                  hasTemps: (temps.length > 0 ? true : false)
              })
          }).filter(item => item.hasTemps)
  
          setData(dataAux)
  
          //{ hour: 18, state: "clouds", temperature: 17, weekDay: "Jueves" }
          const interval = [4, 8, 12, 16, 20, 24]
  
          const forecastItemListAux = data.list
          .filter((item, index) => interval.includes(index))
          .map(item => {
              return ({
                  hour: moment.unix(item.dt).hour(),
                  weekDay: moment.unix(item.dt).format('dddd'),
                  state: item.weather[0].main.toLowerCase(),
                  temperature: toCelsius(item.main.temp)
              })
          })
         
          setForecastItemList(forecastItemListAux)
  
      } catch (error) {
          console.log(error)
      }
      
  }
  
  getForecast()
  
    }, [data, countryCode])
  
  return { city, data, forecastItemList}
   
  }

  export default useCityPage