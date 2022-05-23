import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
    { hour: 18, state: "clouds", temperature: 17, weekDay: "Jueves" },
    { hour: 7, state: "clear", temperature: 18, weekDay: "Viernes" },
    { hour: 12, state: "drizzle", temperature: 18, weekDay: "Viernes" },
    { hour: 11, state: "rain", temperature: 19, weekDay: "Viernes" },
    { hour: 6, state: "snow", temperature: 17, weekDay: "Sábado" },
    { hour: 13, state: "thunderstorm", temperature: 17, weekDay: "Sábado" }
]


test('Forecast render', async () => {
    //findAl : Es para buscar varios elementos
    //Nos va a permitir encontrar cada item con esa marca
      const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList}/>)

      const forecastItems = await findAllByTestId("forecast-item-container")

      expect(forecastItems).toHaveLength(6)
})