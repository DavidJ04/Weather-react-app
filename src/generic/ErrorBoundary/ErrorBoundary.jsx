import React, { Component, PureComponent } from 'react'

class ErrorBoundary extends PureComponent {

    constructor(props) {
        super(props)

        //State es heredada de component(state es un objeto)
        this.state = { hasError: false}
    }
    /*
    estaActivo = () => {
        return this.state.activo ? "Activo" : "No activo"
    }

    onClickHandler = () => {
        //El state es inmutable, no se pueden cambiar sus propiedades
        //Se debe hacer con setState
        this.setState({activo : true})

    }
    
    //Se ejecuta únicamente en la primer renderización
    componentDidMount() { console.log("El componente se a montado") }

    //Se ejecuta apartir de la segunda renderización
    componentDidUpdate(prevProps, prevState) { console.log("Estado previo:", prevState.activo)
                                               console.log("Estado nuevo:", this.state.activo)
                                               console.log("El componente se a actualizado")} 

    componentWillUnmount() {console.log("El componente se a des-montado") }
    */
    //Render nunca recibe ningun parametro

    //De encontrar un error, haga esto:
    static getDerivedStateFromError(error) {
        //this.setState({hasError: true})
        return { hasError: true}
    }

    componentDidCatch(error, errorInfo){
        console.log("ErrorInfo", errorInfo)
    }

    render() {                  //This: hace referencia a la instancia de la clase
        return (
            //Si existe un error
            this.state.hasError ? (<h1>Hubo un error</h1>) : (this.props.children)
            
        )

    }

}

export default ErrorBoundary