import React from "react";
import Item from "../Item/Item"
import LoadingSpinnet from "../../Helpers/LoadingSpinnet";



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
          <LoadingSpinnet/>
        )}
    </div>
  );
        }




export default ItemList