
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Grid } from '@mui/material'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'
//import NotFoundPage from './pages/NotFoundPage'
//import { WeatherContext } from './WeatherContext'

const App = () => {
    return (
        <Grid container
            justifyContent="center"
            direction="row">
            <Grid item xs={12} sm={11} md={10} lg={8}>
                <Router>
                    <Routes>
                        <Route path="/" element={<WelcomePage />} />

                        <Route path="/main" element={<MainPage />} />

                        <Route path="/city" element={<CityPage />} />

                        <Route path="*" element={<NotFoundPage />} />

                    </Routes>
                </Router>
            </Grid>
        </Grid>
    )
}

export default App
