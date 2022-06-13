import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Home from './components/Home/Home';


function App() {

	return (
		<CartProvider>
			<BrowserRouter>
				<div className="App">
					<NavBar/>
					<Routes>
						<Route path='/' element = {<Home/>} />						
						<Route path="/category/:category" element={<ItemListContainer />} />
						<Route path="/detalle/:prodId" element={<ItemDetailContainer />} />
						<Route path="/cart" element={<Cart />} />

						<Route path="/*" element={<Navigate to={'/'} />} />
					</Routes>
				</div>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
