import { useEffect, useDebugValue } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getForecastUrl } from '../utils/urls'
//import { toCelsius } from '../utils/utils'
import getChartData from '../utils/transform/getChartData'
import getForecastItemList from '../utils/transform/getForecastItemList'
import { getCityCode } from '../utils/utils'

const useCityPage = (allData, allForecastItemList, onSetData, onSetForecastItemList) => {

  //const [data, setData] = useState(null)
  //const [forecastItemList, setForecastItemList] = useState(null)

  //Toma los parametros que se estan enviando 
  const { city, countryCode } = useParams()

  useDebugValue(`useCityPage ${city}`)
  useEffect(() => {

    const getForecast = async () => {

      const url = getForecastUrl({ city, countryCode })
      const cityCode = getCityCode(city, countryCode)

      try {
        const { data } = await axios.get(url)

        const dataAux = getChartData(data)

        //Nombre    : Propiedad
        onSetData({ [cityCode]: dataAux })

        const forecastItemListAux = getForecastItemList(data)

        onSetForecastItemList({ [cityCode]: forecastItemListAux })

      } catch (error) {
        console.log(error)
      }

    }

    const cityCode = getCityCode(city, countryCode)
    if (allData && allForecastItemList && !allData[cityCode] && !allForecastItemList[cityCode]) {
      getForecast()
    }

  }, [city, countryCode, onSetData, onSetForecastItemList, allData, allForecastItemList])

  return { city, countryCode }

}

export default useCityPage