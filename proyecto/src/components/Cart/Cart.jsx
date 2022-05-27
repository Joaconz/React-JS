import { useContext } from "react";
import { Card } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cart, removeItem, clearCart } = cartContext;

  return (
    <>
      {cart.map((prod) => (
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={prod.image} />
            <Card.Body>
              <Card.Title>{prod.title}</Card.Title>
              <Card.Text>
                {prod.description}
              </Card.Text>
              <button onClick={()=>removeItem(prod.id)}>-</button>
              <button onClick={clearCart}>clear</button>
            </Card.Body>
          </Card>
        </>
      ))}
    </>
  );
};

export default Cart;
