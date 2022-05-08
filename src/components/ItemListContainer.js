import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import fetchProductos from "../mock-api/Promise"
import Loading from "./Loading"


const ItemListContainer = () => {
    const [prod, setProd] = useState([])
    const [load, setLoad]= useState(true)
    const {id} = useParams()

    useEffect(() => {
        fetchProductos().then(productos => {
            let byIdAll = id ? productos.filter(element => element.category === id) : productos
            setProd(byIdAll)
            setLoad(false)
        })
        return() => {
            setLoad(true)
        }
    },[id])
    console.log(prod)



  return (
      
    <>
       <div>
          <ItemList  listProduct={prod} />   
        </div>
        {
            load && (
                <Loading/>
            )
        }
    </>
  )
}
export default ItemListContainer

/*<>
<div> 
<ItemList listProduct={prod}/>      
</div>
{load &&  (<p>cargando</p>) }
</>*/