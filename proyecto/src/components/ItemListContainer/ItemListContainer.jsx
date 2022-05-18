import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const { id }=useParams()
  
    const getFetch = async () => {
      const resp = await fetch ('https://fakestoreapi.com/products')
      const data = await resp.json()
      if (id) {
        const filtrado = data.filter((prods)=> prods.category === id)
        setProducts(filtrado)
      } else {
        setProducts(data);
      }
        }

  useEffect(() => {
    getFetch();
  }, [id]);

  return (
    <div>
      <ItemList products={products}/>
      </div>
    
  )
}

export default ItemListContainer