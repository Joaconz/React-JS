import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState, Fragment } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { BsBagDash } from 'react-icons/bs';
import ModifyQuantity from "../../Helpers/ModifyQuantity";
import FormToBuy from "../Form/Form";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cart, removeItem, clearCart, totalPrice, form, setForm } = cartContext;


  return (
    <>
      {cart.length>0?
    <div className="mt-20 flex flex-col max-w-none p-6 space-y-4 sm:p-10 dark:text-gray-900">
	<h2 className="text-xl font-semibold">Your cart</h2>
	<ul className="flex flex-col divide-y divide-gray-700">
  {cart.map((prod) => (
		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div className="flex w-full space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={prod.image}/>
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold leading-snug sm:pr-8">{prod.tittle}</h3>
							<p className="text-sm dark:text-gray-400">Color: {prod.color}</p>
						</div>
						<div className="text-right">
							<p className="text-lg font-semibold">${prod.price}</p>
						</div>
					</div>
					<div className="flex text-sm divide-x">
						<button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1" onClick={()=>removeItem(prod.id)}>
							<BsBagDash/>
							<span>Remove</span>
						</button>
						<ModifyQuantity product={prod}/>
					</div>
				</div>
			</div>
		</li>
      ))}
	</ul>
	<div className="space-y-1 text-right">
		<p>Total: 
			<span className="font-semibold"> ${totalPrice()}</span>
		</p>
		<p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
	</div>
	<div className="flex justify-end space-x-4">
    <Link to='/' className="no-underline">
    <button className="flex text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded ml-7">Back to shop</button>
    </Link>
		
    
    <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ml-7" onClick={()=>setForm(!form)}>Checkout</button>


	</div>
  {form?
    <FormToBuy/>
    :
    <></>
  }
    </div>
    :
    <div className="relative h-32 w-32 m-auto">

  <div class="absolute inset-x-0 bottom-0 h-16">

    <h2>No has agregado nada a tu carrito</h2>
    <Link to='/' className="no-underline">
      <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ml-7">Back to shop</button>
    </Link>
    </div>
</div>
    }
    </>
  );
};

export default Cart;
