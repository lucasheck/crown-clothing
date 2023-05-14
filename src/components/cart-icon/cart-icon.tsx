import { useSelector, useDispatch } from "react-redux";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
import {
	selectIsCartOpen,
	selectCartCount,
} from "../../store/cart/cart.selector";
import { toggleIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartCount = useSelector(selectCartCount);
	const dispatch = useDispatch();

	const toggleCartOpen = () => dispatch(toggleIsCartOpen(!isCartOpen));

	return (
		<CartIconContainer onClick={toggleCartOpen}>
			<ShoppingIcon className="shopping-icon" />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
