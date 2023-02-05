import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../../components/cart-item/cart-item";
import Button from "../button/button";
import {
	selectCartItems,
	selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { toggleIsCartOpen } from "../../store/cart/cart.action";

import {
	CartDropDownContainer,
	CartItems,
	EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const isCartOpen = useSelector(selectIsCartOpen);
	const toggleCartOpen = () => dispatch(toggleIsCartOpen(!isCartOpen));
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		toggleCartOpen();
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
