
 const appid = "2e77ef3ec30009c2a7aa9d2c4719c75a"
 export const getWeatherUrl = ({city, countryCode}) => (`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`)

 export const getForecastUrl = ({city, countryCode}) => (`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`)