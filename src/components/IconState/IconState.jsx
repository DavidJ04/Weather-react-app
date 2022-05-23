//Este archivo evita la duplicación de codigo
import React from 'react'
import PropTypes from 'prop-types'
//Utilizar iconos
import { TiWeatherCloudy,
    TiWeatherSunny,
    TiWeatherShower,
    TiWeatherSnow,
    TiWeatherWindyCloudy,
    TiWeatherStormy
} from 'react-icons/ti'
//Funciona para modificar los iconos
//import { IconContext } from 'react-icons'

// Thunderstorm    	 

export const validValues = [
"clouds",
"clear",
"rain",
"snow",
"drizzle",
"thunderstorm"
]

const stateByName = {
clouds: TiWeatherCloudy,
clear: TiWeatherSunny,
rain: TiWeatherShower,
snow: TiWeatherSnow,
drizzle: TiWeatherWindyCloudy,
thunderstorm: TiWeatherStormy
}

const IconState = ({state}) => {
    const StateByName = stateByName[state]
    return(
   <StateByName/>
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
