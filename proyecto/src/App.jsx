import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {

	return (
		<BrowserRouter>
			<div className="App">
				<NavBar
					componente={() => ItemListContainer({ saludo: 'Hola soy el componente contenedor' })}
				></NavBar>
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/categoria/:id" element={<ItemListContainer />} />
					<Route path="/detalle/:prodId" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />

					<Route path="/*" element={<Navigate to={'/'} />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
