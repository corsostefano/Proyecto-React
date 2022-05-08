import ItemCount from "./ItemCount"

const ItemDetail = ({ title, price, pictureUrl, description, stock }) => {
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
                <h5>$ {price}</h5>
              </div>
              <div className="item__detail__columna__info__description">
                <p>{description}</p>
              </div>
            </div>
            <div className="item__detail__columna__compra">
              <div className="item__detail__columna__envio">
                <h3>Envio a todo el Pais</h3>
                <p>Conoce los tiempos y formas de envio.</p>
              </div>
              <div className="item__detail__columna__stock">
                <h3>Stock Disponible</h3>
                <h4>Unidades: {stock} </h4>
              </div>
              <div className="item__detail__columna__count">
                <ItemCount stock={stock} initial={1} />
              </div>

            </div>

          </div>

        </div>
      </div>  
    </>
  )
}
export default ItemDetail