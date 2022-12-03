import "./cart-dropdown.scss";

import Button from "../button/button";

const CartDropdown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="cart-itens" />
			<Button>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
