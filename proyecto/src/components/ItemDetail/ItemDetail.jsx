import { Card } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({product}) => {
  console.log(product)
  return (
    <div>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.image} />
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>
    {product.description}
    </Card.Text>
    <ItemCount stock={10} initial={1}/>
  </Card.Body>
</Card>
    </div>

  )
}

export default ItemDetail