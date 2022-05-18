import React from 'react'
import PropTypes from 'prop-types'
//Importación de Grid
import { Grid, ListItem, List } from '@mui/material'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

//li: item de una lista
//renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventOnClickCity => CityAndCountry => {
      const { city , country } = CityAndCountry
      
      return(
      <ListItem key={city} onClick={eventOnClickCity} button  > 

         <Grid container
               justifyContent="center"
               alignItems="center"
         >
           <Grid item
           //8 columnas de sm en adelante, cuando la resolución sea menor a sm va a ocupar 12 columnas
                 sm={8}>
           <CityInfo city={city} country={country}/>
           </Grid>

           <Grid item
                md={4}
                xs={12}>
                
           <Weather temperature={10} state="sunny"/>
           </Grid>

         </Grid>
         
      </ListItem>
    
      ) 

}

//cities: es un array, y en cada item tiene que tener la ciudad y tambien el country
//ul: tag html para listas no ordenadas
const CityList = ({cities, onClickCity}) => {
  return (
    <List>
        {
        cities.map(CityAndCountry => renderCityAndCountry(onClickCity)(CityAndCountry)) 
        }
    </List>
  )
}

//Como mejorar esta validacion?
CityList.propTypes = {
cities: PropTypes.array.isRequired,
onClickCity: PropTypes.func.isRequired
}

export default CityList