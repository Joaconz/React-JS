import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { CartContext } from "../context/CartContext";

const ModifyQuantity = ({ product }) => {
  const cartContext = useContext(CartContext);
  const { removeItem, changeQuantity } = cartContext;
  const [cant, setCant] = useState(product.cant);

  useEffect(() => {
    changeQuantity(product.id, cant);
  }, [cant]);

  console.log(product.cant);

  const notify = (text) =>
    toast(text, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "foo-bar",
    });

  const suma = () => {
    if (product.cant < product.stock) {
      setCant(product.cant + 1);
      changeQuantity(product.id, cant);
    } else {
      console.log("no hay mas stock del producto");
      notify("No hay mas stock!");
    }
  };

  const resta = () => {
    if (product.cant > 1) {
      setCant(product.cant - 1);
    } else {
      removeItem(product.id);
      console.log("no se puede comprar menos de 1 producto");
      notify("No puedes comprar menos de 1 producto!");
    }
  };

  return (
    <>
      <div className="flex max-h-12">
        <button
          className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-l ml-7"
          onClick={resta}
        >
          -
        </button>
        <span className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none">
          {cant}
        </span>
        <button
          className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-r mr-7"
          onClick={suma}
        >
          +
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default ModifyQuantity;
