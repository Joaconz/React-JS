import { useContext, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const [estado, setEstado] = useState("agregar");

  const cartContext = useContext(CartContext);
  const { addToCart, cart } = cartContext;

  //count, estado
  //onAdd, funcion
  const onAdd = (cant) => {
    setEstado("opciones");
    addToCart({product, cant: cant})
    console.log(cant);
    console.log(cart);
  };

  return (
    <div>
      {product.length != 0 ? (
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>

              {estado === "agregar" ? (
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
              ) : (
                <>
                  <Link to="/cart">
                    <Button variant="dark">Ir al carrito</Button>
                  </Link>
                  <Link to="/">
                    <Button variant="dark">Ver mas productos</Button>
                  </Link>
                </>
              )}
            </Card.Body>
          </Card>
        </>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default ItemDetail;
