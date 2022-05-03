//import React, {useState, useEffect} from "react"

import Item from "./Item"

const ItemList = ({products}) =>{

    return(
        <section className="list__container">
            {products.map(products=>{
                return(
                    <Item key={products.id} products={products}/>
                )
            })}
        </section>
       
    )
}
export default ItemList