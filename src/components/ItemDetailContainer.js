import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import fetchProductos from "../mock-api/Promise"
import ItemDetail from "./ItemDetail"
import Loading from "./Loading"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [load, setLoad] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        fetchProductos().then(productos => {
            let byId = productos.find(element => element.id === parseInt(id))
            setProduct(byId)
            setLoad(false)
        }).catch(console.log)
        console.log("useEffect")
    },[id])

  return (
    <article>
        {
            load
            ?
            <Loading/>
            :
            <div>
                <ItemDetail
                 key={product.id} 
                 title={product.title} 
                 price={product.price} 
                 pictureUrl={product.pictureUrl} 
                 description={product.description}
                />

            </div>
        }
    </article>
  )
}
export default ItemDetailContainer