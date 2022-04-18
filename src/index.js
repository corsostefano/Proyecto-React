//1) Tener la variable react en scope
import React from "react"

//2) Tener la variable reactDOM en scope
import ReactDOM from "react-dom/client"

//importamos los estilos css

import "./sass/estilos.scss"
 
//Importamos el Archivo NavBar
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
 
//3) Tener la variable App(la variable que contiene todo el codigo de la aplicacion) en scope
/*const App = () => {
  return "Hola Mundo"
}*/

//4) Hacer render de la App en el DOM
root.render(<App/>)