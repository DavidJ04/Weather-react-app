import React from "react";
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast

}

const forecastItemList = [
    { hour: 18, state: "cloud", temperature: 17, weekDay: "Jueves" },
    { hour: 7, state: "sunny", temperature: 18, weekDay: "Viernes" },
    { hour: 12, state: "downpour", temperature: 18, weekDay: "Viernes" },
    { hour: 11, state: "snow", temperature: 19, weekDay: "Viernes" },
    { hour: 6, state: "windy", temperature: 17, weekDay: "Sábado" },
    { hour: 13, state: "sunny", temperature: 17, weekDay: "Sábado" }
]


export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)