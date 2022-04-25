import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] =useState(initial)
    const [confirmado, setConfirmado] =useState(false)
    const [isOpen, setIsOpen] =useState(false)
    

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
        setConfirmado(true)
    }
    const cancelar = () =>{
        setCount(initial)
        setConfirmado(false)    
    }
    const close = () =>{
        setIsOpen(!isOpen)
    }

    if(!confirmado){
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

    }else{
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
                <div className= {`item__card__modal ${isOpen ? 'item__card__modal__active' : '' } `} >
                        <button className="button__close material-icons" onClick={close}>close</button>
                        <p className="modal__parrafo" >Se confirmaron {count} unidades!</p>
                        <button className="button__cancelar" onClick={cancelar}>Cancelar</button>
                </div>
            </>
          )

    }

  
}
export default ItemCount