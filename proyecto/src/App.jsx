import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo="Bienvenidos a Andre Cucina!"/>
      <ItemDetailContainer id={1}/>
    </div>
  );
}

export default App;
