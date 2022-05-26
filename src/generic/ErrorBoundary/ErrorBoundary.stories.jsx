import React from "react"
import ErrorBoundary from "./ErrorBoundary"

export default {
    title: "ErrorBoundary",
    component: ErrorBoundary
}

const ComponentBoundaryWithoutError = () => <h1>Sin error</h1>

const prop = (undefined)
const ComponentBoundaryWithError = () => <h1>{prop.hola}</h1>

//ErrorBundary va a envolver otros componentes dentro de si, para verificar si tienen errores o no.
export const ErrorBoundaryWithError= () => (
<ErrorBoundary>
         <ComponentBoundaryWithError/>
</ErrorBoundary>
)

export const ErrorBoundaryWithoutError = () => (
<ErrorBoundary>
         <ComponentBoundaryWithoutError/>
</ErrorBoundary>
)