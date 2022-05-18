import Item from "../Item/Item"
import { Spinner } from "react-bootstrap";



const ItemList = ({products}) => {

  return (
    <div className="product-list-container">
      {
        products.length ? (
          <>
            {
              products.map((product) => {
                return (
                  <div key={product.id}>
                    <Item
                      id={product.id}
                      nombre={product.title}
                      descripcion={product.description}
                      precio={product.price}
                      img={product.image}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
    </div>
  );
};


export default ItemList