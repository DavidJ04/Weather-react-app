import React from 'react'
import PropTypes from 'prop-types'
//Agrega tipografias
import { Typography } from '@mui/material'

const CityInfo = ({city, country}) => {
  return (
    <>
<Typography display="inline" variant='h4'>{city}, </Typography>
<Typography display="inline" variant='h4'>{country}</Typography>
    </>
  )
}

CityInfo.propTypes = {
city: PropTypes.string.isRequired,
country: PropTypes.string.isRequired
}

export default CityInfo