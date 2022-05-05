import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import Loading from "./Loading"
import ProductsList from "./ProductsList"

const ItemListContainer = () => {
  
  const [loading, setLoading] =  useState(true)
  const [products, setProducts] = useState([])

  useEffect(()=>{
  
    const getProducts = new Promise((res) =>{
      setTimeout(()=>{
        res(ProductsList)
      },2000 )
    })
    getProducts
    .then(() =>{
      console.log("termino el pedido bien!")
      setLoading(false)
      setProducts(ProductsList)
      
    })
  },[])

  return (
    <>
        <div>
          <ItemList products={products} />   
        </div>
        {
            loading && (
              <Loading/>
            )
        }
    </>
  )
}

export default ItemListContainer




