import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import ProductsList from "./ProductsList"


const ItemListContainer = () => {
  
  const [cargando, setCargando] =  useState(true)
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
      setCargando(false)
      setProducts(ProductsList)
      
    })
  },[])

  if(cargando){
    return(
     <p>Cargando...</p>
    )
  }else{
    return (
      <>
        <ItemList products={products}  />
      </>
    )
  }
}

export default ItemListContainer




