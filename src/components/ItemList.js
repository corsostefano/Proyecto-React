import Item from "./Item"

const ItemList = ({listProduct}) => {
  return (
    <section className="list__container">
        {listProduct.map(product => (
            <div key={product.id}>
                <Item 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    pictureUrl={product.pictureUrl}
                />

            </div>
        ))}        
    </section>
  )
}
export default ItemList