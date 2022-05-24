import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);

  const { prodId }=useParams()

  const getFetch = async () => {
    const resp = await fetch('https://fakestoreapi.com/products')
    const data = await resp.json()
    const encontrado = data.find((producto)=>producto.id==prodId)
    setProduct(encontrado);
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