import { Link } from "react-router-dom";

const Item = ({id,title,price,pictureUrl}) => {
  return (
      <>
        <article className="item__card">
            <div className="item__card__img">
              <img src={pictureUrl} alt={pictureUrl} />
                
            </div> 
            <div className="item__card__product">
                <h5 className="item__card__title">{title}</h5>
                <p className="item__card__price">$ {price}</p>
                 <Link to={`/item/${id}`}><button className="item__button__detalles" >Detalles</button></Link>
            </div>
        </article>
      </>
    );
}
export default Item