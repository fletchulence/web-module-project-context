import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

/**TODO: NOTES
 * IMPORT CONTEXT AFTER CREATING THEM IN CONTEXTS FOLDER
 * COMPONENT: IMPORT 2 THINGS -- CONTEXT AND THE USECONTEXT HOOK FROM REACT
 * RUN USECONTEXT IN EXPORT BEFORE RETRUN
 * DESTRUCTURE YOUR VALUES BEING PASSED IN FROM PROVIDER
 *  
 */

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// console.log(item.id)
		// add the given item to the cart
		//! spread cart and then add the item
		setCart([...cart, item])
	};

	// const removeItem = cart ={
	// 	setCart(cart.filter(item=>{

	// 	}))
	// }

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, setCart }}>
					<Navigation /* cart={cart} */ />

					{/* Routes */}
					<Route exact path="/">
						<Products /* products={products} addItem={addItem} */ />
					</Route>

					<Route path="/cart">
						<ShoppingCart /* cart={cart} */ />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>

		</div>
	);
}

export default App;
