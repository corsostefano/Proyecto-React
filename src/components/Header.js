//Se Importa NavBars
import NavBars from "./NavBars"

const Header = () => {
    return (
        <header className="header">
                <h1 className="header__titulo">Ecommerce</h1>
                <NavBars/>
            </header>
    )
}
export default Header