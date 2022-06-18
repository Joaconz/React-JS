import React from "react";
import { useState } from "react";
import { BiCart } from "react-icons/bi";

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
            <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-l ml-7" onClick={resta}>-</button>
            <span className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none">{cant}</span>
            <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-r mr-7" onClick={suma}>+</button>
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={()=>onAdd(cant)}>
                <span>Add to Cart</span> 
                  <BiCart className="mt-1.5 ml-1"/>  

                
            </button>
        </div>
    )
}

export default ItemCount