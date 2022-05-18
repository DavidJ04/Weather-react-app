import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import ForecastItem from './../ForecastItem'
import {validValues} from './../IconState'

const renderForecastItem = forecast => {
    const {weekDay, hour, state, temperature} = forecast
    //En estas listas se debe poner un identifacador unico, osea un "Key"
    //Vamos a poner "marca" para encontra cada item
    return(
        <Grid data-testid = "forecast-item-container"  
              item key={`${weekDay}${hour}`}>
              <ForecastItem  hour={hour} state={state} temperature={temperature} weekDay={weekDay}   
              ></ForecastItem>
        </Grid>
    )
}


const Forecast = ({forecastItemList}) => {
  return (
   <Grid container
        justifyContent="space-around"
        alignItems="center">
        {
            forecastItemList.map(forecast => renderForecastItem(forecast))
        }

   </Grid>
  )
}

//Es un array de elementos, deben tener una forma en particular, las siguientes propiedades:
Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired, 
        hour: PropTypes.number.isRequired, 
        state: PropTypes.oneOf(validValues).isRequired, 
        temperature: PropTypes.number.isRequired

    })).isRequired
}

export default Forecast