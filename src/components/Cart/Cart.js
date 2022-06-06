import { useContext, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import { db } from "../../firebase/FirebaseConfig";
import { collection, addDoc, Timestamp} from "firebase/firestore";
import Swal from "sweetalert2";


const Cart = () => {

  const addDocToCollection = () => {
    const collectionRef = collection(db, 'users')

    const objUser = {
      name: "Stefano ",
      phone: "11246584",
      email: "stefanocorso@gmail.com",
      date: Timestamp.fromDate(new Date())
    }

    addDoc(collectionRef, objUser)
        .then(response => {
            console.log(response.id)
        })
    }

    const {items, setItems, removeItem, clearAllItems,countItemQuantity, formatMoney} =useContext(CartContext);
    
    let acumuladorTotal = 0;

    const generateOrder = () => {
    
    const collectionRef = collection(db, "orders")

    const objOrder = {
      item: items,
        buyer: {
          name: "stefano",
          phone: "1154656987",
          email: "stefanocorso6@gmail.com"
        },

      total: countItemQuantity(),
      date: new Date()
    }
    addDoc(collectionRef, objOrder)
      .then(response => {
        console.log(response.id)
      })
     .finally(() => {
        clearAllItems()
             
      })

    addDocToCollection()

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu compra ha sido enviada satisfactoriamente ',
      showConfirmButton: false,
      timer: 2000
    })
  }
    useEffect(() => {
      setItems(items); 
    },[items, setItems]);
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
                          <img src={element.item.pictureUrl} alt={element.item.title}/>
                          {element.item.title}
                        </td>
                        <td>
                          {element.quantity}
                        </td>
                        <td>
                          { formatMoney(element.item.price)}
                        </td>
                        <td>
                          { formatMoney(element.item.price * element.quantity)} 
                        </td>
                        <td>
                          { formatMoney(acumuladorTotal += element.item.price * element.quantity)}
                        </td>
                        <td>
                          <button onClick={() => removeItem(element.item.id)} >
                            <span className="material-icons" >clear</span>
                          </button>
                        </td>

                      </tr>
                    ))
                  }
                  <tr>
                    <td>
                      <h2 className="cart__total">
                        <span>
                          Total: { formatMoney(acumuladorTotal)}
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
              <div className="cart__list__items_vaciar__finalizar">
                <button onClick={ () => clearAllItems()}>Vaciar Carrito</button>
                <button onClick={ () => generateOrder()}>Finalizar compra</button>
              </div>
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