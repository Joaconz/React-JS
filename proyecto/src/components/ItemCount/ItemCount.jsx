import { useState } from "react";
import { Badge, Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [cant, setCant] = useState(initial);

    const suma = () => {
        if (cant < stock) {
            setCant(cant + 1);
        }
        else {
            console.log("no hay mas stock del producto")
        }
    }

    const resta = () => {
        if (cant > initial) {
            setCant(cant - 1);
        }
        else {
            console.log("no se puede comprar menos de 1 producto");
        }

    }

    return (
        <>

            <Button variant="dark" onClick={resta}>-</Button>
            <span style={{margin:10}}>{cant}</span>
            <Button variant="dark" onClick={suma}>+</Button> 
            <Button variant="dark" onClick={onAdd}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount