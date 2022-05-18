import { Card, Spinner } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ product }) => {
  console.log(product)
  return (
    <div>
      {product.length!=0? (
        <>
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <ItemCount stock={10} initial={1} />
        </Card.Body>
      </Card>
      </>
      ): (
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
      </Spinner>
      )
       
    }
     
    </div>

  )
}

export default ItemDetail