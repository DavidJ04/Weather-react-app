import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({ children }) => {

  const myRefDiv = useRef(null)//valor inicial
  const [vanta, setVanta] = useState(0) //vanta va a ser inicializado en 0

  //La primera rendererizacion es igual a null, a partir de la segunda renderización es que toma el valor del div
  //La segunda renderización se consigue de la siguiente manera:
  console.log("myRefDiv.Current", myRefDiv.current)// x 2

  //useEffect se va a renderizar, invocando el valor asigando hasta la segunda renderización
  useEffect(() => {
    console.log("myRefDiv.Current (en UseEffect)", myRefDiv.current)

    //Solo pase una vez dentro del if, es la idea.
    //... Aún más corto, es igual a poner: !vanta
    if (!vanta) {
      //SOLO PASA UNA VEZ
      //Acá vamos a hacer la inicialización de vanta

      //Activo el efecto 'clouds'
      setVanta(Clouds({
        THREE,
        el: myRefDiv.current
      }))// vanta != 0, es diferente de false

      console.log("Establezco vanta en un valor diferente a 0")
    }

      //Al salir de la pantalla debemos detener el efecto
      // y des-asociar todos los recursos (div vanta effect)

      return () => {
        //Dentro de está función se va a realizar la tarea
        //de destruir los recursos formados por "vanta"

        if (vanta) {
          vanta.destroy()
          console.log("Libero los recursos")
        }
    }
  }, [vanta])// Permite que se rendericen solo los componentes agregados aqui, cada vez que se realice una modificacion a los mismos.

  return (
    <div className="full" ref={myRefDiv}>
      {children}
    </div>
  )
}

WelcomeScreen.propTypes = {
  children: PropTypes.node
}

export default WelcomeScreen