import Item from "../Item/Item"
import { memo } from "react";
import LoadingSpinnet from "../../Helpers/LoadingSpinnet";



const ItemList = memo(({products}) => {

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
}, (oldProps, newProps) => oldProps.products.length === newProps.products.length
)


export default ItemList