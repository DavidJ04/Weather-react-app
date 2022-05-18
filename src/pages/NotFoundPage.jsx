import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NotFoundPage = props => {
    return (
        <div>
            NotFoundPage <br></br>
            <Link to="/main">
                Volver a Main
            </Link>
        </div>
    )
}

NotFoundPage.propTypes = {}

export default NotFoundPage