import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const CityPage = props => {
  return (
    <div>
   <Link to="/main">
      Volver a Main
   </Link>
</div>
  )
}

CityPage.propTypes = {}

export default CityPage