const ItemDetail = ({products}) => {

  return (
    <>
        <article className="item__card">
            <div className="item__card__img">
              <img src={products.picture} alt={products.picture} />
                
            </div> 
            <div className="item__card__product">
                <h5 className="item__card__title">{products.title}</h5>
                <p className="item__card__price">$ {products.price}</p>
                <p className="item__card__category"> Categoria: {products.category.map(category=>{
                  return <span>{category}</span> })}
                 </p>
                <button className="item__button__detalles" >Detalles</button>
            </div>
        </article>
      </>
  )
}
export default ItemDetail