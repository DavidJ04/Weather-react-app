
 const appid = "45a95b44d7dda1599d68e3c6076c4327"
 export const getWeatherUrl = ({city, countryCode}) => (`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`)

 export const getForecastUrl = ({city, countryCode}) => (`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`)