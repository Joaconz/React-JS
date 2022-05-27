import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [quantityCart, setQuantityCart] = useState(0);
  //const [total, setTotal] = useState()

  //anadir al carrito
  const addToCart = (item, cant, id) => {
    const newItem = { ...item, cant };
    isInCart(id, newItem);
  };

  //vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  //eliminar item del carrito
  const removeItem = (id) => {
    const filtrado = cart.filter((prod) => prod.id !== id);
    setCart(filtrado);
  };

  const isInCart = (id, newItem) => {
    const index = cart.findIndex((product) => product.id === id);
    if (index !== -1) {
      const oldCant = cart[index].cant;
      const newCart = cart.filter((prod) => prod.id !== newItem.id);
      newItem.cant += oldCant;
      setCart([...newCart, newItem]);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const quantityInCart = () => {
    
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
