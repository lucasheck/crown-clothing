import {
	ActionWithPayload,
	createAction,
	withMatcher,
} from "../../utils/reducer/reducer";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/category.types";

const addCartItem = (
	cartItems: CartItem[],
	productToAdd: CategoryItem
): CartItem[] => {
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

const removeCartItem = (
	cartItems: CartItem[],
	cartItemToRemove: CartItem
): CartItem[] => {
	const existingCartItem = cartItems.find(
		(element) => element.id === cartItemToRemove.id
	);

	if (existingCartItem && existingCartItem.quantity === 1) {
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

const removeAllItems = (
	cartItems: CartItem[],
	cartItemToRemove: CartItem
): CartItem[] => {
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export type ToggleCartOpen = ActionWithPayload<
	CART_ACTION_TYPES.TOGGLE_CART_OPEN,
	boolean
>;
export type SetCartItems = ActionWithPayload<
	CART_ACTION_TYPES.SET_CART_ITEMS,
	CartItem[]
>;

export const toggleIsCartOpen = withMatcher(
	(boolean: boolean): ToggleCartOpen =>
		createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
	(cartItems: CartItem[]): SetCartItems =>
		createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
	cartItems: CartItem[],
	productToAdd: CategoryItem
) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return setCartItems(newCartItems);
};

export const removeItemFromCart = (
	cartItems: CartItem[],
	cartItemToRemove: CartItem
) => {
	const newCartItems = removeCartItem(cartItems, cartItemToRemove);
	return setCartItems(newCartItems);
};

export const removeAllItemFromCart = (
	cartItems: CartItem[],
	cartItemToRemove: CartItem
) => {
	const newCartItems = removeAllItems(cartItems, cartItemToRemove);
	return setCartItems(newCartItems);
};
