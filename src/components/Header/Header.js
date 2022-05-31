//Se Importa NavBars
import NavBars from "../NavBars/NavBars"
const Header = () => {
    return (
        <header className="header">
                <h1 className="header__titulo">Ecommerce</h1>
                <NavBars 
                    nombre="Stefano" 
                    apellido="corso"
                    header
                />
            </header>
    )
}
export default Header