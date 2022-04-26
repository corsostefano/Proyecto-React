import { useState } from "react"

import ModalItem from "./ModalItem"

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] =useState(initial)
    const [confirmed, setConfirmed] =useState(false)
    
    

    const sumaCount = () => {
        if (count < stock){
            setCount (count + 1)
        }
    }
    const restaCount = () => {
        if(count > 1){
            setCount (count - 1)
        }
    }
    const agregar = () => {
        onAdd(count)
        setConfirmed(true)
    }
    const cancel = () =>{
        setCount(initial)
        setConfirmed(false)    
    }
    const close = () =>{
        setConfirmed(false)
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
                {
                    confirmed && (
                        <ModalItem 
                        close = {close}
                        count = {count}
                        cancel = {cancel}/>
                    )
                }
            </>
          )
}
export default ItemCount