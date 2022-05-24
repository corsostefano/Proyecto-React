import {createContext, useState, useEffect} from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem('items')) || []
  });

  useEffect (() => {
    localStorage.setItem('items', JSON.stringify(items))
  },[items])

    const addItem = (item, quantity) => {
      if(!isInCart(item.id)){ 
        setItems([...items, {item: item, quantity: quantity}]);
        console.log("items de CartContext dentro de IF: ", items);   
      }
      console.log("items de CartContext: ", items);
    };
    const getQuantity = () => {
      let count = 0
      items.forEach(prod => {
          count += prod.quantity
      })
      return count
  }

    const isInCart = (id) => {
      return items.some(element => element.item.id === id);
    }

    const removeItem = (id) => {
        let itemAux = [...items];
        itemAux = itemAux.filter(element => element.item.id !== id);
        console.log('Remove item:', itemAux);
        setItems(itemAux);
    };

    const clearAllItems = () => setItems([]);

    const countItemQuantity = () =>{
      let count = 0;
      for (const iterator of items){
          count += iterator.quantity;
      }
      return count;
    }

    return (
      <CartContext.Provider value={{ 
        items, 
        setItems, 
        addItem, 
        getQuantity,
        removeItem, 
        clearAllItems, 
        countItemQuantity }}>
        {children}
      </CartContext.Provider>
    );
  }; 

