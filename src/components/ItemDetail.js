
import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({ title, price, pictureUrl, description, stock }) => {

    const [add, setAdd] =useState(false)

    const onAdd = () =>{
      setAdd(!add)
    }
    const formatMoney = (num) =>{
      if (num){
        return "$ " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
      }
    }

  return (
    <>
      <div className="item__detail__container">
        <div className="item__detail__panel">
          <div className="item__detail__columna">
            <div className="item__detail__columna__galeria">
              <img src={pictureUrl} alt={pictureUrl} />
            </div>
            <div className="item__detail__columna__info">
              <div className="item__detail__columna__info__title">
                <h3>{title}</h3>
              </div>
              <div className="item__detail__columna__info__price">
                <h5>{formatMoney (price)} </h5>
              </div>
              <div className="item__detail__columna__info__description">
                <p>{description}</p>
              </div>
            </div>
            <div className="item__detail__columna__compra">
              <div className="item__detail__columna__envio">
                <div className="item__detail__columna__envio__icons">
                  <span className="material-icons">local_shipping</span>
                  <h3> Envio a todo el Pais</h3>
                </div>
                <p>Conoce los tiempos y formas de envio.</p>
              </div>
              <div className="item__detail__columna__stock">
                <h3>Stock Disponible</h3>
                <h4>Unidades: {stock} </h4>
              </div>
              <div className="item__count">
                {
                  add ?
                      <p>¡Añadido al Carrito!</p>
                      :
                     <ItemCount stock={stock} initial={1} onAdd={onAdd}  />
                } 
                <div className="item__container__button__finalizar">
                  <Link  to="/cart"><button className="button__agregar__finalizar" >Comprar Ahora</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}
export default ItemDetail

// !add ?? <ItemCount stock={stock} initial={1}  onAdd={onAdd} />