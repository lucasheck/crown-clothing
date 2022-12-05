import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
	const index = cartItems.findIndex(
		(element) => element.id === productToAdd.id
	);

	return index > 0
		? cartItems[index].quantity++
		: [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
