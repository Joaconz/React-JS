import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd}) => {

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
        <div className="flex">     
            <span className="leading-relaxed my-1">Quantity:</span>
            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mr-3" onClick={resta}>-</button>
            <span className="title-font font-medium text-2xl text-gray-900 text-center mt-1">{cant}</span>
            <button class="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ml-7" onClick={suma}>+</button>
            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={()=>onAdd(cant)}>Add to cart</button>
        </div>
    )
}

export default ItemCount