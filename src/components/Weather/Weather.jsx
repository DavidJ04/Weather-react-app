import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import {IconContext} from 'react-icons'
//Importa lo necesario para que funcione
import IconState, {validValues} from './../IconState'

const Weather = ({temperature, state}) => {
  return (
    <div>
        <IconContext.Provider value={{size: '4em'}}>
              <IconState state={state}/>
        </IconContext.Provider>
        <Typography display='inline' variant="h2">{temperature}</Typography>
    </div>
  )
}

Weather.propTypes = {

    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
}

export default Weather