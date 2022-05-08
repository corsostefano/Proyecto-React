const ItemDetail = ({ title, price, pictureUrl, description, stock }) => {
  return (
    <>
        <article className="item__card">
            <div className="item__card__img">
              <img src={pictureUrl} alt={pictureUrl} />
                
            </div> 
            <div className="item__card__product">
                <h5 className="item__card__title">{title}</h5>
                <p className="item__card__price">$ {price}</p>
            </div>
        </article>
        
    </>
  )
}
export default ItemDetail