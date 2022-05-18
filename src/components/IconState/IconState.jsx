//Este archivo evita la duplicación de codigo
import React from 'react'
import PropTypes from 'prop-types'
//Utilizar iconos
import { TiWeatherCloudy,
    TiWeatherSunny,
    TiWeatherDownpour,
    TiWeatherSnow,
    TiWeatherWindy
} from 'react-icons/ti'
//Funciona para modificar los iconos
//import { IconContext } from 'react-icons'

export const validValues = [
"cloud",
"sunny",
"downpour",
"snow",
"windy"
]

const stateByName = {
cloud: TiWeatherCloudy,
sunny: TiWeatherSunny,
downpour: TiWeatherDownpour,
snow: TiWeatherSnow,
windy: TiWeatherWindy
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
