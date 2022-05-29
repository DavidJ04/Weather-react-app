import React from 'react'
import CityInfo from './CityInfo'
import 'typeface-roboto'

export default {
    title: "CityInfo",
    component:  CityInfo,
        argTypes: {
            city: { control : { type:'text'}},
            city: { control : { type:'text'}}
        }
}

export const CityExample = (args) => (<CityInfo {...args} ></CityInfo>)         

CityExample.args = {city:"Alajuela", country:"Costa Rica"}