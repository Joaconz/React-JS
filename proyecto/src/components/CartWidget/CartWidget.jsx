import { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;
  return (
    <>
      <Link to="/cart">
        <Button variant="primary">
          <BsFillBagFill /><Badge bg="secondary">{cart.length}</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
        
      </Link>
    </>
  );
};

export default CartWidget;
