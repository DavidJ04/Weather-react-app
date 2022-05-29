import { useEffect, useDebugValue } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getForecastUrl } from '../utils/urls'
//import { toCelsius } from '../utils/utils'
import getChartData from '../utils/transform/getChartData'
import getForecastItemList from '../utils/transform/getForecastItemList'
import { getCityCode } from '../utils/utils'

const useCityPage = (allData, allForecastItemList, actions) => {

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
        //onSetData({ [cityCode]: dataAux })
        actions({ type: 'SET_CHART_DATA', payload:{ [cityCode]: dataAux }})


        const forecastItemListAux = getForecastItemList(data)
        //onSetForecastItemList({ [cityCode]: forecastItemListAux })
        actions({ type: 'SET_FORECAST_ITEM_LIST', payload:{ [cityCode]: forecastItemListAux }})

      } catch (error) {
        console.log(error)
      }

    }

    const cityCode = getCityCode(city, countryCode)
    if (allData && allForecastItemList && !allData[cityCode] && !allForecastItemList[cityCode]) {
      getForecast()
    }

  }, [city, countryCode, actions, allData, allForecastItemList])

  return { city, countryCode }

}

export default useCityPage