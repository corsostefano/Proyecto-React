/* eslint-disable jsx-a11y/anchor-is-valid */
import CartWidget from "./CartWidget"

const NavBars = (props) => {
  

  if (props.header){
    return (
      <nav className="nav">
        <div className="nav__container__categorias">
          <a href="#">{props.nombre}</a> 
        </div>
        <div className="nav__container__inicio">
          <a href="#" className="nav__link__inicio" >Inicio</a>
        </div>
        <div className="nav__container__categorias">
          <a href="#" className="nav__link__categorias">link 1</a>
          <a href="#" className="nav__link__categorias">link 2</a>
          <a href="#" className="nav__link__categorias">link 3</a>
        </div>
        <div className="nav__container__cart">
          <a href="#"><CartWidget/></a>
        </div>
        <div className="nav__container__login">
          <a href="#" className="nav__link__login" >Login</a>
        </div>
      </nav>
    )
  }else{
    return (
      <nav className="nav">
        <div className="nav__container__categorias">
            <a href="#" className="nav__link__categorias">link 1</a>
            <a href="#" className="nav__link__categorias">link 2</a>
            <a href="#" className="nav__link__categorias">link 3</a>
            <a href="#" className="nav__link__categorias">Contactame</a>
            <a href="#" className="nav__link__categorias">faq</a>
        </div>
      </nav>
    )
  }
}
export default NavBars