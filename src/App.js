//Se Importa NavBars "Contiene Header => Nav "Menu"
import Header from "./components/Header"
//Se Importa Main
import Main from "./components/Main"
//Se Importa Footer
import Footer from "./components/Footer"
import {BrowserRouter} from "react-router-dom"



const App = () => {
    return (
        <BrowserRouter>
            <Header/>  
            <Main/>
            <Footer/>
        </BrowserRouter>
    )
  }
   export default App