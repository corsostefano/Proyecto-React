import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import Cart from "../Cart/Cart"
import { Route, Routes } from "react-router-dom"

const Main = () => {
  return (
    <main> 
        <Routes>
        <Route path="/" element={<ItemListContainer/>}  />
        <Route path="/category/:category" element={<ItemListContainer/>} />
        <Route path="/product/:id" element={<ItemDetailContainer/>}  />
        <Route path="/cart" element={<Cart/>} />
      </Routes>     
    </main>
  )
}
export default Main
