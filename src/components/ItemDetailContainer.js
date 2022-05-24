import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loading from "./Loading"
import { db } from "../firebase/FirebaseConfig"
import { collection, getDoc, doc} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [load, setLoad] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const getProductDetails = async () => {
            const productoCollecion = collection(db, "products")
            const resultadoDelDoc = doc(productoCollecion,id)
          
            const consulta = getDoc(resultadoDelDoc)
            console.log(consulta)

            consulta
                .then((resultado)=>{
                    setProduct({...resultado.data(), id: resultado.id})
                    setLoad(false)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        getProductDetails()
    },[id]);

  return (
    <article>
        {
            load
            ?
            <Loading/>
            :
            <section className="list__container__detail">
                <ItemDetail
                 key={product.id} 
                 id= {product.id} 
                 title={product.title} 
                 price={product.price} 
                 pictureUrl={product.pictureUrl} 
                 description={product.description}
                 stock={product.stock}
                />

            </section>
        }
    </article>
  )
}
export default ItemDetailContainer