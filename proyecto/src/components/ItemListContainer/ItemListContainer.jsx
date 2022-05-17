import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import getFetch from "../../getFetch/getFetch";


const ItemListContainer = ({saludo}) => {

  const [products, setProducts] = useState([]);

    const getFetch = async () => {
      const resp = await fetch ('https://fakestoreapi.com/products')
      const data = await resp.json()
      setProducts(data);  }

  useEffect(() => {
    getFetch();
  }, []);

  return (
    <div>
      <h3>{saludo}</h3>
      <ItemList products={products}/>
      </div>
    
  )
}

export default ItemListContainer