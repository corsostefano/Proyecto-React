import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"

const Item = ({id,title,price,pictureUrl}) => {

  const { formatMoney} =useContext(CartContext);
  
  return (
      <>
        <article className="item__card">
            <div className="item__card__img">
              <img src={pictureUrl} alt={pictureUrl} />
                
            </div> 
            <div className="item__card__product">
                <h5 className="item__card__title">{title}</h5>
                <p className="item__card__price">{formatMoney(price)}</p>
                 <Link to={`/product/${id}`}><button className="item__button__detalles" >Detalles</button></Link>
            </div>
        </article>
      </>
    );
}
export default Item