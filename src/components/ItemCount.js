import { useState } from "react"

const ItemCount = (props) => {
    const [count, setCount] =useState(props.initial)

    const sumaCount = () => {
        if (count < props.stock){
            setCount (count + 1)
        }
    }
    const restaCount = () => {
        if(count > 0){
            setCount (count - 1)
        }
    }
    const agregar = () => {
        props.onAdd(count)
        console.log(count)
    }

  return (
    <>
        <div className="item__card">
            <h2 className="titulo__producto">Producto</h2>
            <div className="item__count">
                <button className="item__count__button material-icons" onClick={restaCount}>remove</button>
                <h1>{count}</h1>
                <button className="item__count__button material-icons" onClick={sumaCount}>add</button>
            </div>
            <div className="item__container__button__agregar">
                <button className="button__agregar__carrito " onClick={agregar}>Agregar al carrito</button>
            </div>
        </div>
    </>
  )
}
export default ItemCount