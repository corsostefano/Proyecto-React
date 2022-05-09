import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] =useState(initial)
    
    const sumaCount = () => {
        if (count < stock){
            setCount (count + 1)
        }else{
            alert("No hay stock")
        }
    }
    const restaCount = () => {
        if(count > 1){
            setCount (count - 1)
        }
    }
        return (
            <>
                    <div className="item__count__barra">
                        <button className="item__count__button material-icons" onClick={restaCount}>remove</button>
                        <h1>{count}</h1>
                        <button className="item__count__button material-icons" onClick={sumaCount}>add</button>
                    </div>
                    <div className="item__container__button__agregar">
                            <button className="button__agregar__carrito" onClick={() => onAdd()}> Agregar al carrito</button>
                    </div>
                
            </>
          )
}
export default ItemCount