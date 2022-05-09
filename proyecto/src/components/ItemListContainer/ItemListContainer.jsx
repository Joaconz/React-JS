import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({saludo="saludos"}) => {


  const onAdd = () => {
    console.log("onAdd");
  }

  return (
    <div>
      <h3>{saludo}</h3>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
      </div>
    
  )
}

export default ItemListContainer