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
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Item
              id={product.id}
              name={product.tittle}
              price={product.price}
              img={product.image}
              category = {product.category}
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