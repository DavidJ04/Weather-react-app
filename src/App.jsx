
import React, { useState, useCallback, useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'
//import NotFoundPage from './pages/NotFoundPage'
//import { WeatherContext } from './WeatherContext'

const App = () => {
    const [allWeather, setAllWeather] = useState({})
    const [allData, setAllData] = useState({})
    const [allForecastItemList, setAllForecastItemList] = useState({})

    const onSetAllWeather = useCallback((weatherCity) => {
        setAllWeather(allWeather => {
            return ({ ...allWeather, ...weatherCity })
        })
    }, [setAllWeather])

    const onSetData = useCallback((chartDataCity) => {
        setAllData(charData => ({...charData, ...chartDataCity}))
    }, [setAllData])

    const onSetForecastItemList = useCallback((forecastItemListCity) => {
        setAllForecastItemList(forecastItemList => ({...forecastItemList, ...forecastItemListCity}))
    }, [setAllForecastItemList])

    const actions = useMemo(() => (
        {
            onSetAllWeather,
            onSetData, 
            onSetForecastItemList
        }
    ), [onSetAllWeather, onSetData, onSetForecastItemList])

    const dataMe = useMemo(() => (
        {
            allWeather,
            allData,
            allForecastItemList
        }

    ), [allWeather, allData, allForecastItemList])

    return (

        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />

                <Route path="/main" element={<MainPage dataMe={dataMe} actions={actions} />} />

                <Route path="/city/:countryCode/:city" element={<CityPage dataMe={dataMe} actions={actions} />} />

                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </Router>
    )
}

export default App
