const Ingresa = () => {
  return (
    <>
    <div className="container__ingresar">
      <div className="container__ingresar__input">
        <h2>Ingresa tus datos para continuar</h2>
        <form action="" className="container__ingresar__formulario" >
          <div>
            <label htmlFor="">Teléfono, e-mail o usuario</label>
          </div>
          <div>
          <input type="text" />
          </div>
        </form>
        <div className="container__cuenta__button">
          <button>Continuar</button>
        </div>
      </div>
    </div>
  </>
  )
}
export default Ingresa