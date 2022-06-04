import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";



export default function FormToBuy () {

    const cartContext = useContext(CartContext);
    const { cart, clearCart, totalPrice } = cartContext;
    
    function generateOrder() {
        let order = {}
        
        order.buyer = {name: 'Joaquin', email: 'joaquinunez2004@gmail.com', phone: '123456789'}
        order.total = totalPrice()
    
        order.items = cart.map (item=>{
          const id = item.id
          const name = item.tittle
          const price = item.price * item.cant
    
          return {id, name, price}
      })
    
      const db = getFirestore()
      const orderCollection = collection(db, 'orders')
    
      addDoc(orderCollection, order)
        .then(resp=>console.log(resp))
        .catch(err=>console.log(err))
        .finally(()=>clearCart())
      
      }
    

    return(
    <>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <button variant="primary" onClick={generateOrder}>
            Submit
        </button>
        </Form>
    </>
)
}
