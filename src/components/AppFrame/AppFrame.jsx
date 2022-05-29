import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import { Grid, AppBar, Toolbar, IconButton, Link, Typography } from '@mui/material'
import { IconContext } from 'react-icons/lib'
import { TiWeatherSunny } from 'react-icons/ti'
import { Link as LinkRouter} from 'react-router-dom'

const AppFrame = ({ children }) => {
  const iconContextSize = useMemo(() => ({size: '2em'}), [])
  return (
    <Grid container justifyContent="center">
        <AppBar position='static'>
           <Toolbar variant='dense'>
                <IconButton color='inherit' aria-label='menu'>
                    <Link component={LinkRouter} to='/main' color='inherit' aria-label='menu'>
                        <IconContext.Provider value={iconContextSize}>
                            <TiWeatherSunny/>
                        </IconContext.Provider>
                    </Link>
                </IconButton>
                <Typography variant='h6' color='inherit'>
                    Weather App
                </Typography>
           </Toolbar>    
        </AppBar>
        <Grid 
         item 
        xs={12} 
        sm={10} 
        md={10} 
        lg={8}>
         {children}
        </Grid>
    </Grid>
  )
}

AppFrame.propTypes = {
    //Node: Cualquier elemento valido de React
    children: PropTypes.node
}

export default AppFrame