import React from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  const { prodId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemFirebase = doc(db, "items", prodId);
    getDoc(itemFirebase)
      .then((resp) => {
        if (resp.size === 0) {
          console.log("Doesn't exist");
        } else {
          setProduct({ id: resp.id, ...resp.data() });
        }
      })

      .catch((err) => console.log(err));
  }, [prodId]);


  return (
    <>
      <h3>ItemDetailContainer</h3>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;
