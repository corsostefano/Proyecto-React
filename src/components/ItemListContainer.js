import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import fetchProductos from "../mock-api/Promise"
import Loading from "./Loading"


const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const [load, setLoad]= useState(true)
    const {id} = useParams()

    useEffect(() => {
        fetchProductos().then(productos => {
            let productById = id ? productos.filter(element => element.category === id) : productos
            setProduct(productById)
            setLoad(false)
        })
        return() => {
            setLoad(true)
        }
    },[id])
    console.log(product)



  return (
      
    <>
    {
        load ?
        <Loading/>
        :
        <ItemList  listProduct={product}/>
    }
       
    </>
  )
}
export default ItemListContainer



/*<div>
          <ItemList  listProduct={product} />   
        </div>
        {
            load && (
                <Loading/>
            )
        }*/