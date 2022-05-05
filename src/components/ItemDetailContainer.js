import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loading from "./Loading"
import ProductsList from "./ProductsList"


const ItemDetailContainer = () => {

  const [loading, setLoading] =  useState(true)
  const [products, setProducts] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const getProducts = new Promise((res)=>{
      setTimeout(() => {
        const resultado = ProductsList.find((x) => x.id === id)
        res (resultado)
      },2000)
    })
    getProducts
    .then((repuesta) =>{
      setProducts(repuesta)
      setLoading(false)
    })
   
    
  },[id])


  return (
    <>
        <div>
          <ItemDetail products={products} />   
        </div>
        {
            loading && (
              <Loading/>
            )
        }
    </>
  )
}


export default ItemDetailContainer