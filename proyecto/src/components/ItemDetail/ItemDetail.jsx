import React from "react";
import { useContext } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import LoadingSpinnet from "../../Helpers/LoadingSpinnet";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  const onAdd = (cant) => {
    addToCart(product, cant, product.id);
  };

  return (
    <div>
      {product ? (
        <>
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src={product.image}
                />
                             
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    Custom Your Desk
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {product.title}
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <BsFillStarFill className="w-4 h-4 text-indigo-500"/>
                      <BsFillStarFill className="w-4 h-4 text-indigo-500"/>
                      <BsFillStarFill className="w-4 h-4 text-indigo-500"/>
                      <BsFillStarFill className="w-4 h-4 text-indigo-500"/>
                      <span className="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                  </div>
                  <p className="leading-relaxed">{product.description}</p>

                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                  </div>
                  <span className="title-font font-medium text-2xl text-gray-900">
                    $ {product.price}
                  </span>
                  <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <LoadingSpinnet />
      )}
    </div>
  );
};

export default ItemDetail;
