import {useState, useEffect, useDebugValue} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getForecastUrl } from '../utils/urls'
//import { toCelsius } from '../utils/utils'
import getChartData from '../utils/transform/getChartData'
import getForecastItemList from '../utils/transform/getForecastItemList'

const useCityPage = () => {
    
    const [data, setData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)
  
    //Toma los parametros que se estan enviando 
    const { city, countryCode } = useParams()
  
    useDebugValue(`useCityPage ${city}`)
    useEffect( () => {
  
      const getForecast = async () => {

      const url = getForecastUrl({city, countryCode})
  
      try {
          const { data } = await axios.get(url)

          const dataAux = getChartData(data)
  
          setData(dataAux)
  
          const forecastItemListAux = getForecastItemList(data)
         
          setForecastItemList(forecastItemListAux)
  
      } catch (error) {
          console.log(error)
      }
      
  }
  
  getForecast()
  
    }, [city, data, countryCode])
  
  return { city, countryCode, data, forecastItemList}
   
  }

  export default useCityPage