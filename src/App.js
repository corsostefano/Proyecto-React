import { CartProvider } from "./context/CartContext"
import RouterApp from "./router/RouterApp"

const App = () => {
    return (
       <>
        <CartProvider>
            <RouterApp/> 
        </CartProvider>    
       </>
    )
  }
   export default App