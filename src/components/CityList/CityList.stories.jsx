import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component:  CityList
}

const cities = [
    {city: "Puntarenas", country: "Costa Rica"},
    {city: "Heredia", country: "Costa Rica"},
    {city: "Cartago", country: "Costa Rica"},
    {city: "Guanacaste", country: "Costa Rica"},
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />         