import React from "react";
import { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const { quantityInCart, openCart } = cartContext;

  return (
    <>
      <Link to="/cart" className="text-gray-800 hover:text-gray-400 duration-500 no-underline flex text-center">
        <button onClick={openCart} 
        className=' w-auto mt-1.5 flex'>
          <BsBag />
          {quantityInCart() > 0? 
          
          (<span className="ml-1 mt-0 pb-0">{
          quantityInCart()
          }</span>)
          
          : 
          (<></>)
          
          }
        </button>
        
      </Link>
    </>
  );
};

export default CartWidget;
