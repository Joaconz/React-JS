import { useState } from "react";


const ItemCount = ({stock, initial, onAdd}) => {

    const [cant, setCant] = useState(initial); 

    
    const suma = () =>{
        if (cant<stock) {
            setCant (cant + 1);
        }
        else{
            console.log ("no hay mas stock del producto")
        }
    }

    const resta = () =>{
        if (cant>initial) {
            setCant(cant - 1);
        }
        else {
            console.log ("no se puede comprar menos de 1 producto");
        }

    }

  return (
    <>
        <button onClick={resta}>-</button>
        <h3>{cant}</h3>
        <button onClick={suma}>+</button>
        <button onClick={onAdd}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount