import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cart, removeItem, clearCart, totalPrice } = cartContext;

  return (
    <>
    {cart.length > 0? 
    <>
     {cart.map((prod) => (
        <div key={prod.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={prod.image} />
            <Card.Body>
              <Card.Title>{prod.title}</Card.Title>
              <Card.Text>
                {prod.description}
              </Card.Text>
              <Card.Text>{prod.cant}</Card.Text>
              <button onClick={()=>removeItem(prod.id)}>-</button>
            </Card.Body>
          </Card>
          </div>
      ))}
      <h2>Total: {totalPrice()}$</h2>
      <button onClick={clearCart}>Vaciar carrito</button>
      </>
    : 
    <>
    <h3>Todavia no has agregado nada al carrito</h3>
    <Link to='/'>
      <Button>Productos</Button>
    </Link>
    </>
    }
    </>
    
    
  );
};

export default Cart;
