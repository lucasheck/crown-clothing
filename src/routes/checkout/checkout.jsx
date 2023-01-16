import { useContext } from "react";

import { CartContext } from "../../contexts/cart-context";

import CheckoutProduct from "../../components/checkout-product/checkout-product";

import "./checkout.scss";

const Checkout = () => {
	const { cartItems, totalValue } = useContext(CartContext);

	return (
		<div className="checkout">
			<div className="checkout-item-list">
				<div className="checkout-label">
					<span>Product</span>
					<span>Description</span>
					<span>Quantity</span>
					<span>Price</span>
					<span className="span-remove">Remove</span>
				</div>
				<div className="checkout-description">
					{cartItems.map((product) => (
						<CheckoutProduct
							key={product.id}
							product={product}
						></CheckoutProduct>
					))}
				</div>
				<div className="checkout-total">TOTAL: ${totalValue}</div>
			</div>
		</div>
	);
};

export default Checkout;
