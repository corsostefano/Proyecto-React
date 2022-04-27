const ModalItem = ({close, count, cancel}) => {
  return (
    <>
        <div className= "item__card__modal" >
            <button className="button__close material-icons" onClick={close}>close</button>
            <p className="modal__parrafo" >Se confirmaron {count} unidades!</p>
            <button className="button__cancelar" onClick={cancel}>Cancelar</button>
        </div>
    </>
  )
}
export default ModalItem