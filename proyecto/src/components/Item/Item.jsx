import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"

import React from 'react'

const Item = ({ id, nombre, precio, descripcion, img }) => {




    return (
        <div key={id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{descripcion}</Card.Text>
                    <Card.Text>{precio}$</Card.Text>
                    <ItemCount stock={10} initial={1}/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item

