import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loading from "./Loading"
import { db } from "../firebase/firebaseConfig"
import { collection, getDocs, query, where, documentId } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [load, setLoad] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const dbRef = collection(db, 'products');

                const consulta = query(dbRef, where(documentId(dbRef), "==", id));
                const data = await getDocs(consulta);
                setProduct(data.docs.map(doc => (
                    {
                        id: doc.id,
                        ...doc.data()
                    }
                )));

                setLoad(false);
            } catch(err) {
                console.log('Error', err);
            };
        };

        getProductDetails();
    }, [id]);
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