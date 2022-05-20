import React from 'react'
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen'
import { Grid } from '@mui/material'
import { IconContext } from 'react-icons'
import { TiWeatherSunny } from 'react-icons/ti'
import { Typography } from '@mui/material'
import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const WelcomePage = () => {
  return (
          <WelcomeScreen>
              <Grid container direction="column" justifyContent="center" className="full">
                    <div className="highlight">
                      <Grid item container xs={12} justifyContent="center" alignItems="center">
                        <Grid item>
                           <IconContext.Provider value={{ size:"6em"}}>
                             <TiWeatherSunny/>
                           </IconContext.Provider>  
                        </Grid>
                        <Grid item container direction="column" justifyContent="center" alignItems="center">
                            <Typography variant="h4" color="inherit" >
                                Weather App
                            </Typography>
                            <Link color="inherit" arial-label="menu" component={RouterLink} to="/main">
                              Ingresar
                            </Link>
                        </Grid>
                      </Grid>
                    </div>
              </Grid>
          </WelcomeScreen>
  )
}

export default WelcomePage