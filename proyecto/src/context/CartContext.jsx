import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

//anadir al carrito 
  const addToCart = (item, cant) => {
    const newItem = { ...item, ...cant };
    const index = cart.findIndex((product) => product.id === newItem.id);

    if (index !== -1) {
      const oldCant = cart[index].cant;
      const newCart = cart.filter((prod) => prod.id !== newItem.id);
      newItem.cant += oldCant;
      setCart([...newCart, newItem]);
    } else {
      console.log(item);
      setCart([...cart, newItem]);
      console.log(cart);
    }
  };

//vaciar carrito
  const clearCart = ()=>{
    setCart([])
  }

//eliminar item del carrito 
const removeItem = (id) => {
  const filtrado = cart.filter(prod => prod.id !== id)
  //setCart(cart.splice(eliminado))
  setCart(filtrado)
}




  return (
    <>
      <CartContext.Provider value={{ cart, addToCart, clearCart, removeItem }}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
