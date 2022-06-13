import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import LoadingSpinnet from "../../Helpers/LoadingSpinnet";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cart, removeItem, clearCart, totalPrice } = cartContext;
  const [orderGenerated, setOrderGenerated] = useState(false)
  const [orderId, setOrderId] = useState(0)

  function generateOrder() {
    let order = {}
    const date = new Date()
    const [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()];

    order.buyer = {name: 'Joaquin', email: 'joaquinunez2004@gmail.com', phone: '123456789'}
    order.total = totalPrice()

    order.items = cart.map (item=>{
      const id = item.id
      const name = item.tittle
      const price = item.price * item.cant

      return {id, name, price}
  })
  order.date = {year, month, day}

  const db = getFirestore()
  const orderCollection = collection(db, 'orders')

  addDoc(orderCollection, order)
    .then(resp=>{
      console.log(resp)
      setOrderId(resp.id)
      
    })
    .catch(err=>console.log(err))
    //.finally(()=>clearCart())

    setOrderGenerated(true)
  
  }

  return (
    <>
    {cart.length > 0? 
    <>
     {cart.map((prod) => (
<>
<div class="flex font-sans">
<div class="flex-none w-48 relative">
  <img src="/classic-utility-jacket.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
</div>
<form class="flex-auto p-6">
  <div class="flex flex-wrap">
    <h1 class="flex-auto text-lg font-semibold text-slate-900">
      {prod.title}
    </h1>
    <div class="text-lg font-semibold text-slate-500">
      {prod.price}
    </div>
  </div>
  <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
  </div>
  <div class="flex space-x-4 mb-6 text-sm font-medium">
    <div class="flex-auto flex space-x-4">
      <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
        Remove
      </button>
      <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
        quantity
      </button>
    </div>
    <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
      <svg width="20" height="20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
      </svg>
    </button>
  </div>
</form>
</div>

 
</>


       
      ))}
      <h2>Total: {totalPrice()}$</h2>
      {orderGenerated === false? 
      <button onClick={generateOrder}>Terminar compra</button>
      :
      <>
      <h2>Tu numero de orden es: </h2>
      {
      orderId === 0? 
      <LoadingSpinnet/>
      :
      <h2>{orderId}</h2>    
      }
      </>
      }
      
      <button onClick={clearCart}>Vaciar carrito</button>
  
      </>
    : 
    <>
    <h3>Todavia no has agregado nada al carrito</h3>
    <Link to='/'>
      <Button>Productos</Button>
    </Link>
    </>
    }
    </>
    
    
  );
};

export default Cart;
