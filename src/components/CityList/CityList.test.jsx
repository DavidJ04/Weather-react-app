import React from 'react'
import CityList from './CityList'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const cities = [
    {city: "Puntarenas", country: "Costa Rica"},
    {city: "Heredia", country: "Costa Rica"},
    {city: "Cartago", country: "Costa Rica"},
    {city: "Guanacaste", country: "Costa Rica"},
]

test("CityList renders", async () => { 
 
const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => {}}/>)

const items = await findAllByRole("button")

//Cantidad de items del array cities
expect(items).toHaveLength(4)

})

test("CityList click on item" ,async () => {

//Debemos simular una accion en el usuario
//Se va a utilizar una funcion "mock"

const fnClickOnItem = jest.fn()

const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)

const items = await findAllByRole("button")

//Ahora, para simular una acción, se va a utilizar fireEvent
//fireEvent es parte de la libreria testing library

fireEvent.click(items[0])

//Se debe llamar a la función fnClickOnItem UNA única vez 

expect(fnClickOnItem).toHaveBeenCalledTimes(1)
//Cuantas veces fue llamado

})