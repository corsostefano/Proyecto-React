import ItemCount from "./ItemCount"


const Item = ({data}) => {
    const { title, price, stock, picture } = data;

    const onAdd = () => {

    }
  return (
      <>
        <div className="item__card">
            <div className="item__card__img">
                <img src={picture} alt={picture} />
            </div> 
            <div className="item__card__product">
                <h5 className="item__card__title">{title}</h5>
                <p className="item__card__price">$ {price}</p>
            </div>
            <ItemCount 
              stock={stock} 
              initial={1} 
              onAdd = {onAdd} />
        </div>
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