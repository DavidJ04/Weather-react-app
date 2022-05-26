import React from 'react'
import { Grid } from '@mui/material'
import { IconContext } from 'react-icons'
import { TiWeatherStormy } from 'react-icons/ti'
import { Typography } from '@mui/material'
import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const NotFoundPage = props => {
    return (
          // <WelcomeScreen>
              <Grid container direction="column" justifyContent="center" className="full">
                    <div className="highlight">
                      <Grid item container xs={12} justifyContent="center" alignItems="center">
                        <Grid item>
                           <IconContext.Provider value={{ size:"6em"}}>
                             <TiWeatherStormy/>
                           </IconContext.Provider>  
                        </Grid>
                        <Grid item container direction="column" justifyContent="center" alignItems="center">
                            <Typography variant="h4" color="inherit" >
                                404 | La página no existe
                            </Typography>
                            <Link color="inherit" arial-label="menu" component={RouterLink} to="/main">
                              Volver al inicio
                            </Link>
                        </Grid>
                      </Grid>
                    </div>
              </Grid>
        //  </WelcomeScreen>
    )
}

NotFoundPage.propTypes = {}

export default NotFoundPage