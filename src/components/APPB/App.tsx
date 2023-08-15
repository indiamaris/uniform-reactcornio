/** @format */

import { useState } from 'react';
import NavBar from './Navbar';
import Cart from './Cart';

function AppX() {
	const [cartItems, setCartItems] = useState(['Chomsky', ' Amarela', 'Mumu']);
	const handleDeleteALL = () => {
		setCartItems([]);
	};

	const handleAdd = () => {

		setCartItems([...cartItems, 'outro chihuahua']);
	};

	return (
		<>
			<NavBar cartItemsCount={cartItems.length} />

			<Cart
				cartItems={cartItems}
				onDeleteAll={handleDeleteALL}
				onAdd={handleAdd}
			/>
		</>
	);
}

export default AppX;

