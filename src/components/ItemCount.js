import { useState } from "react"

const ItemCount = () => {
    const [count, setCount] =useState (0)

    const sumaCount = () => {
        setCount (count + 1)
    }
    const restaCount = () => {
        setCount (count - 1)
    }

  return (
    <>
        <div class="item__card__agregar">
            <h2 class="titulo__producto">Producto</h2>
            <div class="item__count">
                <button class="item__count__button" onClick={restaCount}>-</button>
                <h1>{count}</h1>
                <button class="item__count__button" onClick={sumaCount}>+</button>
            </div>
            <div class="item__container__button__agregar">
                <button class="button__agregar__carrito">Agregar al carrito</button>
            </div>
        </div>
    </>
  )
}
export default ItemCount