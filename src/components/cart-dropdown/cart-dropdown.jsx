import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart-context";

import CartItem from "../../components/cart-item/cart-item";

import Button from "../button/button";

import {
	CartDropDownContainer,
	CartItems,
	EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
	const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		toggleIsCartOpen();
		navigate("/checkout");
	};

	return (
		<CartDropDownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} cartItem={cartItem} />
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</CartDropDownContainer>
	);
};

export default CartDropdown;
