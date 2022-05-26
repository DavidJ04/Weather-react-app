const cities = [
    {city: "San Ramón", country: "Costa Rica", countryCode: "CR"},
    {city: "Turrialba", country: "Costa Rica", countryCode: "CR"},
    {city: "Alajuelita", country: "Costa Rica", countryCode: "CR"},
    {city: "Desamparados", country: "Costa Rica", countryCode: "CR"},
  ]

  export const getCities = () => (cities)

  export const getCountryNameByCountryCode = (countryCode) => cities.filter(c => c.countryCode === countryCode)[0].country