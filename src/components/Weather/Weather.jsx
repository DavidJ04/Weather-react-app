import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import { Typography, Skeleton } from '@mui/material'
import {IconContext} from 'react-icons'
import { Grid } from '@mui/material'
//Importa lo necesario para que funcione
import IconState, {validValues} from './../IconState'

const Weather = ({temperature, state}) => {
  const iconContextSize = useMemo(() => ({size: '4em'}), [])
  return (
    <Grid container item direction="row" justifyContent="center" alignItems="center">
        <IconContext.Provider value={iconContextSize}>
              {
              //Si viene indefinido o no.
              state ?
              <IconState state={state}/> : <Skeleton variant="circle" height={80} width={80}></Skeleton>
              }
        </IconContext.Provider>
       { 
       temperature ?
       <Typography display='inline' variant="h2">{temperature}</Typography> : <Skeleton variant="rect" height={80} width={80}></Skeleton>
       }
    </Grid>
  )
}

Weather.propTypes = {

    temperature: PropTypes.number,
    state: PropTypes.oneOf(validValues),
}

export default Weather