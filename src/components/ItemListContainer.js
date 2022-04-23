import Saludo from "./Saludo"
import ItemCount from "./ItemCount"

const ItemListContainer = () => {
  const stock = 5
  const initial = 1
  const onAdd = () => {

  }

  return (
    <>
        <Saludo persona="Stefano" />
        <ItemCount 
        stock= {stock} 
        initial= {initial}
        onAdd = {onAdd} />
    </>
  )
}

export default ItemListContainer