import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {
  const {items, countItemQuantity} = useContext(CartContext)

    return (
      <>
        {
          items.length === 0
          ?
          <div>
            <span className="material-icons">
              shopping_cart
            </span>
          </div>
          :
          <div className="cart__widget">
            <div className="cart__widget__icons">
              <span className="material-icons">
                shopping_cart
              </span>
            </div>
            <div className="cart__widget__count">
              <span>
                {countItemQuantity()}
              </span>
            </div>
          </div>
        }

      </>
     
    )
  }
  export default CartWidget

 /* <span className="material-icons">
  shopping_cart
</span>*/