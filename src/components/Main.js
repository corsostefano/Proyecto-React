import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from "./Cart"
import { Route, Routes } from "react-router-dom"

const Main = () => {
  return (
    <main> 
        <Routes>
        <Route path="/" element={<ItemListContainer/>}  />
        <Route path="/category/:idCategory" element={<ItemListContainer/>} />
        <Route path="/product/:idProduct" element={<ItemDetailContainer/>}  />
        <Route path="/cart" element={<Cart/>} />
      </Routes>     
    </main>
  )
}
export default Main
