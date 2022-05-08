import Item from "./Item"

const ItemList = ({listProduct}) => {
  return (
    <section className="list__container">
        {listProduct.map(item => (
            <div key={item.id}>
                <Item 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    pictureUrl={item.pictureUrl}
                />

            </div>
        ))}        
    </section>
  )
}
export default ItemList