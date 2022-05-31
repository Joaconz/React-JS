import { useContext, useEffect } from "react";
import { Badge, Button } from "react-bootstrap";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const { quantityCart, quantityInCart, cart } = cartContext;
  

  return (
    <>
      <Link to="/cart">
        <Button variant="primary">
          <BsFillBagFill /><Badge bg="secondary">{
          quantityInCart
          }</Badge>
        </Button>
        
      </Link>
    </>
  );
};

export default CartWidget;
