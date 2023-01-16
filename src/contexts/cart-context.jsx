import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
	const index = cartItems.findIndex(
		(element) => element.id === productToAdd.id
	);

	if (index >= 0) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(element) => element.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(
			(cartItem) => cartItem.id !== cartItemToRemove.id
		);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const removeAllItems = (cartItems, cartItemToRemove) => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	removeAllItemFromCart: () => {},
	cartCount: 0,
	totalValue: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [totalValue, setTotalValue] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newTotalValue = cartItems.reduce(
			(totalValue, cartItem) =>
				totalValue + cartItem.quantity * cartItem.price,
			0
		);
		setTotalValue(newTotalValue);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (cartItemToRemove) => {
		setCartItems(removeCartItem(cartItems, cartItemToRemove));
	};

	const removeAllItemFromCart = (cartItemToRemove) => {
		setCartItems(removeAllItems(cartItems, cartItemToRemove));
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		removeItemFromCart,
		removeAllItemFromCart,
		cartCount,
		totalValue,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
