import { AnyAction } from "redux";
import { CartItem } from "./cart.types";
import { setCartItems, toggleIsCartOpen } from "./cart.action";

export type CartState = {
	readonly isCartOpen: boolean;
	readonly cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
	isCartOpen: false,
	cartItems: [],
};

export const cartReducer = (
	state = CART_INITIAL_STATE,
	action: AnyAction
): CartState => {
	if (setCartItems.match(action)) {
		return { ...state, cartItems: action.payload };
	}
	if (toggleIsCartOpen.match(action)) {
		return { ...state, isCartOpen: action.payload };
	}
	return state;
};
