//Se Importa NavBars
import NavBars from "./NavBars"
const edad = 32

const saludo = () => {}


const Header = () => {
    return (
        <header className="header">
                <h1 className="header__titulo">Ecommerce</h1>
                <NavBars 
                    nombre="stefano" 
                    apellido="corso" 
                    edad={edad} 
                    onAdd={saludo}
                    header
                />
            </header>
    )
}
export default Header