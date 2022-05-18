//Esto define el nombre del test
import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo' //SUT: Subject under testing(objeto a testear)

test("CityInfo render", async () => { 
    //AAA = Las 3 AAA de los test
    //Arrange
    //Act
    //Assert 
    const city = "Alajuela"
    const country = "Costa Rica"
    //Render: Renderiza el componente y retorna una serie de funciones de utilidad
    // En este caso utilizamos "findAllByRole" para consultar a nuestro componente
    //Vamos a analizar su estado en el "Assert"
    const {findAllByRole} = render(<CityInfo city={city} country= {country}/>)

    //Assert 
    //finAllByRole va a buscar todos los componentes que sean "heading" ->  H1, H2, h3... etc
    //El resultado es una array de componentes (cityAndCountryComponents)
    const cityAndCountryComponents = await findAllByRole("heading")

    //Cuando el test va a ser correcto?
    //Definición:
    //Cuando el primer elemento (heading) se encuentre la ciudad "Alajuela"
    //y cuando en el segundo elemento se encuentre el pais Costa Rica

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)

    //Si estas condiciones se cumplen es que todo se encuentra bien (expect)
})