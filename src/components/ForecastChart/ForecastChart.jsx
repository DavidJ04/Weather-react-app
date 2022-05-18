import React from 'react'
import PropTypes from 'prop-types'
//import LineChart
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
//Line: Permite crear lineas.\
//LineChart: Sirve de molde

const ForecastChart = ({ data }) => {
    return (
        <ResponsiveContainer height={250} width={"95%"}>
            <LineChart
                margin={{ top: 20, bottom: 20, left: 5, right: 5 }}
                data={data}>

                <XAxis dataKey="dayHour"></XAxis>
                <YAxis></YAxis>

                <CartesianGrid></CartesianGrid>

                <Tooltip></Tooltip>

                <Legend></Legend>

                <Line type="monotone" dataKey="max" stroke="#FF0000"></Line>
                <Line type="monotone" dataKey="min" stroke="#0000FF"></Line>

            </LineChart>
        </ResponsiveContainer>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.string.isRequired,
            max: PropTypes.string.isRequired
        }),
    ).isRequired,

}

export default ForecastChart