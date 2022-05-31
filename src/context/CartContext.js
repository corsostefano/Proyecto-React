import {createContext, useState,useEffect } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children}) => {

  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem('items')) || []
  });

  useEffect (() => {
    localStorage.setItem('items', JSON.stringify(items))
  },[items])
  
  const addItem = (item, quantity)=>{
    if(isInCart(item.id)){
      const newItems = [...items];
      for(const element of newItems){
        if(element.item.id === item.id){
          item.quantity = it.quantity + quantity
        }
      }
      setItems(newItems)
    }else{
      setItems([
        ...items,
        {
          item:item,
          quantity: quantity
        }
      ])
    }
  }

  const isInCart = (id) => {
    return items.find(e => e.id === id)
  }

    const getQuantity = () => {
      let count = 0
      items.forEach(prod => {
          count += prod.quantity
      })
      return count
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
    const formatMoney = (num) => {
      if (num){
          return "$ " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        }
  }

    return (
      <CartContext.Provider value={{ 
        items, 
        setItems, 
        addItem, 
        getQuantity,
        removeItem, 
        clearAllItems, 
        countItemQuantity,
        formatMoney }}>
        {children}
      </CartContext.Provider>
    );
  }; 

