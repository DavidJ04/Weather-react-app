import React, {Component} from 'react'

class ErrorBoundary extends Component {

        estaActivo = () => {
            this.props.activo ? "Activo" : "No activo"
        }

        //Render nunca recibe ningun parametro
        render() {                  //This: hace referencia a la instancia de la clase
            return (<h1>
                ErrorBoundary {this.props.saludo}
                {
                    this.estaActivo()
                }
                   </h1>
                   )
        }

}

export default ErrorBoundary