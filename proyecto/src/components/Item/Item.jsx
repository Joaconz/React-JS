import { Button, Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"

import React from 'react'
import { Link } from "react-router-dom"

const Item = ({ id, img }) => {
    return (
        <div key={id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Link to={`/detalle/${id}`}>
                        <Button>Detalle de producto</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item

