import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CityPage = () => {
  return (
    <div>
      City <br></br>
      <Link to="/main">
        Volver a Main
      </Link>
    </div>
  )
}

export default CityPage