
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
//import NotFoundPage from './pages/NotFoundPage'
//import { WeatherContext } from './WeatherContext'

const App = () => {
    return (

            <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />

                    <Route path="/main" element={<MainPage/>}/>
                      
                    <Route path="/city" element={<CityPage/>}/>

                    <Route path="*" />
                                                      
                </Routes>
            </Router>
    )
}

export default App
