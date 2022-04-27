import React, {useState, useEffect} from "react"

import Item from "./Item"
import samsungGalaxyS21 from "../img/1.png";
import samsungGalaxyA03s from "../img/2.png";
import appleIphone13pro from "../img/3.png";
import motorolaEdge20lite  from "../img/4.png";




const ItemList = () => {

    const productsList = [
        {
            id: 1,
            title: "Samsung Galaxy S21",
            description:
                "Triple Cámara trasera de 12 MP + 12 MP + 8 MP Cámara Frontal de 32 MP. Infinity-O Display de 6.4", 
            price: 114999,
            picture: samsungGalaxyS21,
            stock: 10,
        },
        {
            id: 2,
            title: "Samsung Galaxy A03s",
            description:
                "Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.", 
            price: 59899,
            picture: samsungGalaxyA03s,
            stock: 7,
        },
        {
            id: 3,
            title: "Apple Iphone 13 pro",
            description:
                "Phone 13 Pro Max. El mayor avance en el sistema de cámaras Pro hasta ahora. Pantalla Super Retina XDR con ProMotion que brinda una respuesta más rápida y fluida. Chip A15 Bionic para un rendimiento fuera de serie. Diseño resistente y la mayor duración de batería jamás vista en un iPhone.1", 
            price: 386999,
            picture: appleIphone13pro,
            stock: 3,
        },
        {
            id: 4,
            title: "Motorola Edge 20 lite",
            description:
                "Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.", 
            price: 68879,
            picture: motorolaEdge20lite,
            stock: 33,
        },
       
    ];

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            setTimeout (() =>{
                return resolve (productsList);
            }, 2000);
        });
    };

    useEffect(() => {
        getProducts().then((data) => {
          setProducts(data);
        });
      }, );

      return (
        <div className="list__container">
          {products.map((product) => {
            const { id } = product;
            return <Item data={product} key={id} />;
          })}
        </div>
      );
}
export default ItemList