import React, { useState } from "react";
import { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const { quantityInCart, openCart } = cartContext;

  return (
    <>
      <Link to="/cart">
        <Button variant="primary" onClick={openCart}>
          <BsFillBagFill />
          {quantityInCart() > 0? 
          
          (<Badge bg="secondary">{
          quantityInCart()
          }</Badge>)
          
          : 
          (<></>)
          
          }
          
          
          
        </Button>
        
      </Link>
    </>
  );
};

export default CartWidget;
