import React, { useReducer, useContext } from 'react'

const WeatherStateContext = React.createContext()

const WeatherDistpachContext = React.createContext()

const initialValue = {
    //Eso es una forma de compactar e inicializar los valores que anteriormente requerian un "useSate"
    allWeather: {},
    allData: {},
    allForecastItemList: {}
}

// action = { type: XXX, payload: XXX }
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL_WEATHER':
            const weatherCity = action.payload
            const newAllWeather = { ...state.allWeather, ...weatherCity }
            return { ...state, allWeather: newAllWeather }

        case 'SET_CHART_DATA':
            const chartDataCity = action.payload
            const newChartData = { ...state.allData, ...chartDataCity }
            return { ...state, allData: newChartData }

        case 'SET_FORECAST_ITEM_LIST':
            const forecastItemListCity = action.payload
            const newForecastItemList = { ...state.allForecastItemList, ...forecastItemListCity }
            return { ...state, allForecastItemList: newForecastItemList }

        default:
            return state
    }
}

const WeatherContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <WeatherDistpachContext.Provider value={dispatch}>
            <WeatherStateContext.Provider value={state}>
                {children}
            </WeatherStateContext.Provider>
        </WeatherDistpachContext.Provider>
    )
}

const useWeatherDispatchContext = () => {
        const dispatch = useContext(WeatherDistpachContext)

        if (!dispatch) {
            throw Error('Must set dispatch provider')
        }

        return dispatch
} 

const useWeatherStateContext = () => {
    const state = useContext(WeatherStateContext)

    if (!state) {
        throw Error('Must set dispatch provider')
    }

    return state
}

export {WeatherContext, useWeatherDispatchContext, useWeatherStateContext}