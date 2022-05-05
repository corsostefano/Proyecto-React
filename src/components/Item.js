import { Link } from "react-router-dom";

const Item = ({products}) => {
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
                 <Link to={`/product/${products.id}`}><button className="item__button__detalles" >Detalles</button></Link>
            </div>
        </article>
      </>
    );
}
export default Item
/*
<div className="card">
<img src={picture} className="card-img-top" alt={picture} />
<div className="card-body">
  <h5 className="card-title">{title}</h5>
  <p className="card-text">Precio: Ars {price}</p>
  <ItemCount stock={stock} initial={1} />
</div>
</div>
*/