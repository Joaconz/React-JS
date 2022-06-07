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
        <div key={prod.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={prod.image} />
            <Card.Body>
              <Card.Title>{prod.title}</Card.Title>
              <Card.Text>
                {prod.description}
              </Card.Text>
              <Card.Text>{prod.cant}</Card.Text>
              <button onClick={()=>removeItem(prod.id)}>-</button>
            </Card.Body>
          </Card>
          </div>
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
