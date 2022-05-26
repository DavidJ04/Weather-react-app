//import { validValues } from "../../../components/IconState"
import { getCityCode, toCelsius } from "./../utils"
//import convertUnits from 'convert-units'
import { validValues } from "../../components/IconState"

const getAllWeather = (response, city, countryCode) => {

    const { data } = response
    const temperature = toCelsius(data.main.temp)
    
    const humidity = data.main.humidity 
    const wind = data.wind.speed

    const stateFromServer = data.weather[0].main.toLowerCase()

    const state = validValues.includes(stateFromServer) ? stateFromServer : null

    const propName = getCityCode(city, countryCode)
    const propValue = { temperature, state, humidity, wind }

     return ({ [propName]: propValue })

}

export default getAllWeather