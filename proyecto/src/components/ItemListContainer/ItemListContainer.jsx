import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const itemsFirebase = collection(db, "items");

    if (category) {
      const itemsFirebaseFilter = query(
        itemsFirebase,
        where("category", "==", category)
      );
      getDocs(itemsFirebaseFilter)
        .then((resp) => {
          if (resp.size === 0) {
            console.log("No existe");
          } else {
            setProducts(
              resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
            );
          }
        })

        .catch((err) => console.log(err));
    } else {
      getDocs(itemsFirebase)
        .then((resp) => {
          if (resp.size === 0) {
            console.log("No existe");
          } else {
            setProducts(
              resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
            );
          }
        })

        .catch((err) => console.log(err));
    }
  }, [category]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
