import { Link } from "react-router-dom"
import { imagenes } from "../../assets/imagenes"

const Categorias = () => {
  return (
    <>
        <div className="container__categorias__principal">
            <div className="container__categorias__listado">
              <div className="container__categorias__listado__secciones">
                <h3>Celulares</h3>
                  <Link to="/category/celulares"><img src={imagenes.celulares} alt="" className="categorias__img" /></Link>
              </div>
              <div className="container__categorias__listado__secciones">
                <h3>Camaras</h3>
                <Link to="/category/camaras" ><img src={imagenes.camaras} alt="" className="categorias__img" /></Link>
              </div>
              <div className="container__categorias__listado__secciones">
                <h3>Consolas</h3>
                <Link to="/category/consolas"><img src={imagenes.consolas} alt="" className="categorias__img" /></Link>
              </div> 
            </div>
        </div>
    </>
  )
}
export default Categorias