import React, { Component } from "react";
import ForecastItem from "./ForecastItem";

export default {
    title: "ForecastItem",
    component: ForecastItem
}

export const LunesSoleado = () =>( <ForecastItem hour={10} state="snow" temperature={23} weekDay="Lunes"/> )