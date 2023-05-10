import { CategoryItem } from "../categories/category.types";

export enum CART_ACTION_TYPES {
	SET_CART_ITEMS = "SET_CART_ITEMS",
	TOGGLE_CART_OPEN = "TOGGLE_CART_OPEN",
}

export type CartItem = CategoryItem & {
	quantity: number;
};
