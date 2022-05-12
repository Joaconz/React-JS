import Item from "../Item/Item"
import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap";

const productos = [
  { id: 1, nombre: "buzo", precio: 200, stock: 7, descripcion: "esto es una descripcion predeterminada", img: "https://www.generalcatalyst.com/wp-content/uploads/2017/10/featured-img-145-150x150.png" },
  { id: 2, nombre: "remera", precio: 150, stock: 5, descripcion: "esto es una descripcion predeterminada", img: "https://www.generalcatalyst.com/wp-content/uploads/2017/10/featured-img-145-150x150.png" },
  { id: 3, nombre: "gorra", precio: 100, stock: 3, descripcion: "esto es una descripcion predeterminada", img: "https://www.generalcatalyst.com/wp-content/uploads/2017/10/featured-img-145-150x150.png" },
  { id: 4, nombre: "buzo", precio: 200, stock: 7, descripcion: "esto es una descripcion predeterminada", img: "https://www.generalcatalyst.com/wp-content/uploads/2017/10/featured-img-145-150x150.png" },
  { id: 5, nombre: "remera", precio: 150, stock: 5, descripcion: "esto es una descripcion predeterminada", img: "https://www.generalcatalyst.com/wp-content/uploads/2017/10/featured-img-145-150x150.png" },
  { id: 6, nombre: "gorra", precio: 100, stock: 3, descripcion: "esto es una descripcion predeterminada", img: "https://www.generalcatalyst.com/wp-content/uploads/2017/10/featured-img-145-150x150.png" }
]

const ItemList = () => {

  const [products, setProducts] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 2000)
  })


  const getProductsFromDB = async () => {
    try {
      const result = await getProducts;
      setProducts(result);
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

  useEffect(() => {
    getProductsFromDB();
  }, []);

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
                      nombre={product.nombre}
                      descripcion={product.descripcion}
                      precio={product.precio}
                      stock={product.stock}
                      id={product.id}
                      img={product.img}
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