/* eslint-disable jsx-a11y/anchor-is-valid */
import CartWidget from "./CartWidget"

const NavBars = (props) => {
  

  if (props.header){
    return (
      <nav className="nav">
        <div className="nav__container__categorias">
          <ul>
            <li>
              <a href="#">{props.nombre}</a>
            </li>
          </ul>
        </div>
        <div className="nav__container__inicio">
          <ul>
            <li>
              <a href="#" className="nav__link__inicio" >Inicio</a>
            </li>
          </ul>
        </div>
        <div className="nav__container__categorias">
          <ul>
            <li>
              <a href="#" className="nav__link__categorias">Vehiculos</a>
              <a href="#" className="nav__link__categorias">Electronica</a>
              <a href="#" className="nav__link__categorias">Libros</a>
            </li>
          </ul>
        </div>
        <div className="nav__container__cart">
          <ul>
            <li>
              <a href="#"><CartWidget/></a>
            </li>
          </ul>
        </div>
        <div className="nav__container__login">
          <ul>
            <li>
              <a href="#" className="nav__link__login" >Login</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }else{
    return (
      <nav className="nav">
        <div className="nav__container__categorias">
          <ul>
            <li>
              <a href="#" className="nav__link__categorias">Vehiculos</a>
              <a href="#" className="nav__link__categorias">Electronica</a>
              <a href="#" className="nav__link__categorias">Libros</a>
              <a href="#" className="nav__link__categorias">Contactame</a>
              <a href="#" className="nav__link__categorias">faq</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default NavBars