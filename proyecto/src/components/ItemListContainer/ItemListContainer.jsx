import React from "react";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocsFromFirebase } from "../../Helpers/GetDocsFromFirebase";
import {
  collection,
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
      getDocsFromFirebase(itemsFirebaseFilter, setProducts);
    } else {
      getDocsFromFirebase(itemsFirebase, setProducts);
    }
  }, [category]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
