import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from "./WeatherDetails"
import IconState, {validValues} from './../IconState'

test("WeatherDetails render", async () => {

    //findByText: Permite encontrar un componente por el texto que muestra
const {findByText} = render(<WeatherDetails wind={10} humidity={80} />)

//Se emolea una expresión regular
const wind = await findByText(/10/)

const humidity = await findByText(/80/)

expect(wind).toHaveTextContent("Viento: 10 km/h")
expect(humidity).toHaveTextContent("Humedad: 80%")

})