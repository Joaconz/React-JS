import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [quantityCart, setQuantityCart] = useState(0);
  const [total, setTotal] = useState()

  //anadir al carrito
  const addToCart = (item, cant, id) => {
    const newItem = { ...item, cant };
    isInCart(id, newItem);
    console.log(cart)
  };

  //vaciar carrito
  const clearCart = () => {
    setCart([]);
    setTotal(0);
    setQuantityCart(0);
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
    return cart.reduce ((counter, products) => counter += products.cant, 0)
    
  }

  const totalPrice = () => {
    return cart.reduce ((counter, products) => counter += (products.cant * products.price), 0)
  }

  return (
    <>
      <CartContext.Provider value={{ cart, addToCart, clearCart, removeItem, quantityCart, quantityInCart, totalPrice }}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
