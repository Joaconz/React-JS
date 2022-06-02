import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import LoadingSpinnet from "../../Helpers/LoadingSpinnet";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const [estado, setEstado] = useState("add");

  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;


  const onAdd = (cant) => {
    setEstado("options");
    addToCart(product, cant, product.id)
  };

  return (
    <div>
      {product? (
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>

              {estado === "add" ? (
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
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
        <LoadingSpinnet/>
      )}
    </div>
  );
};

export default ItemDetail;
