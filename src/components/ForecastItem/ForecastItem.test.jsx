import React from "react";
import { render } from '@testing-library/react'
import ForecastItem from "./ForecastItem";


test("ForecastItem render", async () => {

const {findByText} = render(<ForecastItem weekDay="Martes" hour={17} state="snow" temperature={30} />)

const hour = await findByText(/17/)

const temperature = await findByText(/30/)


expect(hour).toHaveTextContent('17')
expect(temperature).toHaveTextContent('30')

})