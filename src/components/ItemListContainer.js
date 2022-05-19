import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import Loading from "./Loading"
import { db } from "../firebase/firebaseConfig"
import { collection, getDocs, query, where } from 'firebase/firestore';




const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const [load, setLoad]= useState(true)
    const {id} = useParams()

    useEffect(() => {   
        const getProducts = async () => {
            try {
                if(id) {
                    const repuesta = query(collection(db, 'products'), where('category', "==", id));
                    const datos = await getDocs(repuesta);
                    setProduct(datos.docs.map(doc => (
                        {
                            id: doc.id,
                            ...doc.data()
                        }
                    )));
                } else {
                    const dbData = await getDocs(collection(db, 'products'));
                    setProduct(dbData.docs.map(doc => (
                        {
                            id: doc.id,
                            ...doc.data()
                        }
                    )));
                };

                setLoad(false);    
            } catch(error) {
                console.log('Error', error);
            };
        };

        getProducts();
    }, [id]);


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



