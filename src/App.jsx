
import React, { useState, useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'
//import NotFoundPage from './pages/NotFoundPage'
//import { WeatherContext } from './WeatherContext'

const App = () => {
    const [allWeather, setAllWeather] = useState({})

    const onSetAllWeather = useMemo(() => ((weatherCity) => {
        setAllWeather(allWeather => {
            return ({ ...allWeather, ...weatherCity })
        })
    }), [setAllWeather])

    return (

        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />

                <Route path="/main" element={<MainPage allWeather={allWeather} onSetAllWeather={onSetAllWeather} />} />

                <Route path="/city/:countryCode/:city" element={<CityPage allWeather={allWeather} onSetAllWeather={onSetAllWeather} />} />

                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </Router>
    )
}

export default App
