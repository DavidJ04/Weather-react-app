import React from 'react'
import {Link} from 'react-router-dom'

const WelcomePage = () => {
  return (
    <div>
          WelcomePage <br></br>
         <Link to="/main">
            Ir a Main
         </Link>
    </div>
  )
}

export default WelcomePage