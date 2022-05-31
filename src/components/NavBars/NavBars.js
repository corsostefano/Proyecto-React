import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"



const NavBars = (props) => {
  

  if (props.header){
    return (
      <nav className="nav">
        <div className="nav__container__categorias">
          <Link to="/usuario">{props.nombre}</Link> 
        </div>
        <div className="nav__container__inicio">
          <Link to="/" className="nav__link__inicio" >Inicio</Link>
        </div>
        <div className="nav__container__categorias">
          <Link to="/category/celulares" className="nav__link__categorias">Celulares</Link>
          <Link to="/category/camaras" className="nav__link__categorias">Camaras</Link>
          <Link to="/category/consolas" className="nav__link__categorias">Consolas</Link>
        </div>
        <div className="nav__container__cart">
          <Link to="/cart"><CartWidget/></Link>
        </div>
        <div className="nav__container__login">
          <Link to="/login" className="nav__link__login" >Login</Link>
        </div>
      </nav>
    )
  }else{
    return (
      <nav className="nav">
        <div className="nav__container__categorias">
            <Link to="/category//celulares" className="nav__link__categorias">Celulares</Link>
            <Link to="/category//camaras" className="nav__link__categorias">Camaras</Link>
            <Link to="/category//consolas" className="nav__link__categorias">Consolas</Link>
            <Link to="/contactame" className="nav__link__categorias">Contactame</Link>
            <Link to="/fap" className="nav__link__categorias">faq</Link>
        </div>
      </nav>
    )
  }
}
export default NavBars