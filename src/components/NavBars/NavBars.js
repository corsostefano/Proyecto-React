import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

const NavBars = () => {

  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  
  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if(window.innerWidth < 960){
      setDropdown(true)
    }else{
      setDropdown(true)
    }
  }
  const onMouseLeave = () => {
    if(window.innerWidth < 960){
      setDropdown(false)
    }else{
      setDropdown(false)
    }
  }
 
  return (
    <>
      <header>
        <nav className="navbar">
          <Link to="/" className="navbar__logo">Tech Store</Link>
          <div className="menu__icon" onClick={handleClick}>
            <span className="material-icons"> {click ? 'close' : 'menu'} </span>
          </div>  
          <ul className={click ? 'nav__menu active' : "nav__menu"}>
            <li className="nav__item" onMouseEnter={onMouseEnter}  onMouseLeave={onMouseLeave} >
              <Link to="/category" className="nav__links categorias" onClick={closeMobileMenu}>Categorias
                <div><span className="material-icons arrow_drop_down"> arrow_drop_down </span></div>               
               </Link>
              {dropdown && <Dropdown/>}
            </li>
            <li className="nav__item">
              <Link to="/cuenta" className="nav__links" onClick={closeMobileMenu}>Crea tu Cuenta</Link>
            </li>
            <li className="nav__item">
              <Link to="/ingresa" className="nav__links" onClick={closeMobileMenu}>Ingresa</Link>
            </li>
            <li className="nav__item">
              <Link to="/promociones" className="nav__links" onClick={closeMobileMenu}>Promociones</Link>
            </li>
          </ul>
          <div className="nav__container__cart">
            <Link to="/cart"><CartWidget/></Link>
          </div>
        </nav>
      </header>
    </>
  )
}
export default NavBars