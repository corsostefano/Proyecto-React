import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import ProductsList from "./ProductsList"


const ItemDetailContainer = ({ id }) => {

  
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
      setProducts(ProductsList)
      
    })
  },[])

  const productfiltered = products.find((x) => x.id === id);

  return (
    <div>
      {productfiltered ? (
        <ItemDetail products={productfiltered} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};
            
         

export default ItemDetailContainer