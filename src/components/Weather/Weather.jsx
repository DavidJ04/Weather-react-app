import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'
import {IconContext} from 'react-icons'
import { Grid } from '@mui/material'
//Importa lo necesario para que funcione
import IconState, {validValues} from './../IconState'

const Weather = ({temperature, state}) => {
  return (
    <Grid container item direction="row" justifyContent="center" alignItems="center">
        <IconContext.Provider value={{size: '4em'}}>
              <IconState state={state}/>
        </IconContext.Provider>
        <Typography display='inline' variant="h2">{temperature}</Typography>
    </Grid>
  )
}

Weather.propTypes = {

    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
}

export default Weather