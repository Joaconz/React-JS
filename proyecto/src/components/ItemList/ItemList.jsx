import React from "react";
import Item from "../Item/Item"
import LoadingSpinnet from "../../Helpers/LoadingSpinnet";



const ItemList = ({products}) => {

  return (
    <div className="product-list-container">
      {
        products.length ? (
          <>

<div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
            <Item
              id={product.id}
              name={product.tittle}
              price={product.price}
              img={product.image}
            />
          </div>
          ))}
        </div>
      </div>
    </div>
          </>
        ) : (
          <LoadingSpinnet/>
        )}
    </div>
  );
        }




export default ItemList