import { useContext } from "react";

import { CartContext } from "../../contexts/cart-context";

import CartItem from "../../components/cart-item/cart-item";

import Button from "../button/button";

import "./cart-dropdown.scss";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<div className="cart-dropdown-container">
			<div className="cart-itens">
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} cartItem={cartItem} />
				))}
			</div>
			<Button>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
