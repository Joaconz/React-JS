import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({saludo="saludos"}) => {

  return (
    <div>
      <h3>{saludo}</h3>
      <ItemList/>
      </div>
    
  )
}

export default ItemListContainer