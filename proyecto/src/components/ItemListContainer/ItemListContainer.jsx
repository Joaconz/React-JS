import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const { id }=useParams()

 useEffect(() => {
  const db = getFirestore();

  const itemsFirebase = collection(db, "items")

  if (id) {
    const itemsFirebaseFilter = query(itemsFirebase, where( 'id' , '==' , id ))
        getDocs(itemsFirebaseFilter)
        .then((resp)=>{
          if (resp.size===0) {
            console.log("No existe")
          }
          else{
          setProducts (resp.docs.map(prod=>({id: prod.id, ...prod.data()})))
          
        }})
        
        
        .catch(err=>console.log(err))
        }
    
  else {


    getDocs(itemsFirebase)
        .then(resp=>{
          if (resp.size===0) {
            console.log("No existe")
          }
          else{
            setProducts(resp.docs.map(prod=>({id: prod.id, ...prod.data()})))
        }})
        
        
        .catch(err=>console.log(err))
  }

 }, [id])
 
 console.log(products)
  /*  const getFetch = async () => {
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
  }, [id]);*/

  return (
    <div>
      <ItemList products={products}/>
      </div>
    
  )
}

export default ItemListContainer