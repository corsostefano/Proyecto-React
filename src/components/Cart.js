import { useContext, useEffect } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
  const {items, setItems, removeItem, clearAllItems} =useContext(CartContext);
  let acumuladorTotal = 0;

  useEffect(() => {
    setItems(items); 
  },[items, setItems]);

  const formatMoney = (num) =>{
    if (num){
      return "$ " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
  }

  if(items.length !== 0){
    return(
      <>
        <div className="cart__list__container">
          <div className="cart__list__items">
            <div className="cart__list__items__title">
              <h3>
                Carrito
              </h3>
            </div>
            <table className="cart__list__table">
              <thead>
                <tr>
                  <th>
                    Producto
                  </th>
                  <th>
                    Cantidad
                  </th>
                  <th>
                    Precio
                  </th>
                  <th>
                    Total
                  </th>
                  <th>
                    Total Acumulado
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  items.map((element, index) => (
                    <tr key={index}>
                      <td className="td__producto">
                        <img width="120" height="130" src={element.item.pictureUrl} alt={element.item.title}/>
                        {element.item.title}
                      </td>
                      <td>
                        {element.quantity}
                      </td>
                      <td>
                        {formatMoney(element.item.price)}
                      </td>
                      <td>
                        {formatMoney(element.item.price * element.quantity)} 
                      </td>
                      <td>
                        {formatMoney(acumuladorTotal += element.item.price * element.quantity)}
                      </td>
                      <td>
                        <button onClick={() => removeItem(element.item.id)} >
                          <span >Eliminar</span>
                        </button>
                      </td>

                    </tr>
                  ))
                }
                <tr>
                  <td>
                    <h2 className="cart__total">
                      <span>
                        Total: {formatMoney(acumuladorTotal)}
                      </span>
                    </h2>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <button onClick={ () => clearAllItems()}>Vaciar Carrito</button>
          </div>
        </div>
      </>
    )
  }else{
    return(
      <>
        <div className="cart__list__container">
          <div className="cart__off">
            <div>
              <h2>Tu carrito está vacío</h2>
            </div>
            <div>
              <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
            </div>
            <div className="cart__off__button">
              <Link to="/">
                <button>Volver al Listado</button>
              </Link>
            </div>
          
          </div>

        </div>
      </>
    )
  }
    
       
  
}
export default Cart