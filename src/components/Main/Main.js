import ItemListContainer from "../ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import Cart from "../Cart/Cart"
import { Route, Routes } from "react-router-dom"
import Categorias from "../../Pages/Categorias/Categorias"
import Cuenta from "../../Pages/Cuenta/Cuenta"
import Promociones from "../../Pages/Promociones/Promociones"
import Ayuda from "../../Pages/Ayuda/Ayuda"

const Main = () => {
  return (
    <main> 
        <Routes>
        <Route path="/" element={<ItemListContainer/>}  />
        <Route path="/category/:category" element={<ItemListContainer/>} />
        <Route path="/product/:id" element={<ItemDetailContainer/>}/>
        <Route path="/category" element={<Categorias/>}/>
        <Route path="/cuenta" element={<Cuenta/>}/>
        <Route path="/promociones" element={<Promociones/>}/>
        <Route path="/ayuda" element={<Ayuda/>}/>
        <Route path="/cart" element={<Cart/>} />
      </Routes>     
    </main>
  )
}
export default Main
