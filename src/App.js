import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { CartContext } from './context/cartContext';
import { ProductContext } from './context/productContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<Navigation cart={cart} />
			<CartContext.Provider>
				<ProductContext.Provider value = {{ 		products, addItem }}>
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route>
				</ProductContext.Provider>
			</CartContext.Provider>
		</div>
	);
}

export default App;
