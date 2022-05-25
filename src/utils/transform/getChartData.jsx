import { toCelsius } from '../utils'
import moment from 'moment'

const getChartData = (data) => {
    //Convierta a grados celsius
    //const toCelsius = (temp) => Number(convertUnits(temp).from("K").to("C").toFixed(0))

    console.log("data", data)

    //Dias
    const daysAhead = [0, 1, 2, 3, 4, 5]
    const days = daysAhead.map(d => moment().add(d, 'd'))
    const dataAux = days.map(day => {

        //Temperatura
        const tempObjArray = data.list.filter(item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear()
            return dayOfYear === day.dayOfYear()
        })

        //Se obtiene la temperatura
        const temps = tempObjArray.map(item => item.main.temp)

        //Dias
        return ({
            dayHour: day.format('ddd'),
            //Extrae los valores maximos y minimos
            min: toCelsius(Math.min(...temps)),
            max: toCelsius(Math.max(...temps)),
            //Cuando posea más de un elemento va a ser verdadero
            hasTemps: (temps.length > 0 ? true : false)
        })
    }).filter(item => item.hasTemps)

    return dataAux
}

export default getChartData