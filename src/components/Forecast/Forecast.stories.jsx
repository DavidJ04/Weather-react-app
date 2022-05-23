import React from "react";
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast

}

const forecastItemList = [
    { hour: 18, state: "clouds", temperature: 17, weekDay: "Jueves" },
    { hour: 7, state: "clear", temperature: 18, weekDay: "Viernes" },
    { hour: 12, state: "rain", temperature: 18, weekDay: "Viernes" },
    { hour: 11, state: "snow", temperature: 19, weekDay: "Viernes" },
    { hour: 6, state: "drizzle", temperature: 17, weekDay: "Sábado" },
    { hour: 13, state: "thunderstorm", temperature: 17, weekDay: "Sábado" }
]


export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />)