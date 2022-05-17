import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ id }) => {

  const [product, setProduct] = useState([]);

  const getFetch = async () => {
    const resp = await fetch('https://fakestoreapi.com/products')
    const data = await resp.json()
    setProduct(data.find((producto) => producto.id === id));
  }

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <>
      <h3>ItemDetailContainer</h3>
      <ItemDetail product={product}/>
    </>
  )
}

export default ItemDetailContainer