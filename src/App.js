import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import { ProductContext } from './contexts/ProductContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// console.log(item.id)
		// add the given item to the cart
		//! spread cart and then add the item
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>

				<Navigation cart={cart} />

				{/* Routes */}
				<Route exact path="/">
					<Products /* products={products} addItem={addItem} */ />
				</Route>

				<Route path="/cart">
					<ShoppingCart cart={cart} />
				</Route>
				
			</ProductContext.Provider>

		</div>
	);
}

export default App;
