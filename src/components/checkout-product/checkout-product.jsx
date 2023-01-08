import { ReactComponent as CloseIcon } from "../../assets/x-close.svg";
import { ReactComponent as LessThanIcon } from "../../assets/less-than.svg";
import { ReactComponent as GreaterThanIcon } from "../../assets/greater-than.svg";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

import "./checkout-product.scss";

const CheckoutProduct = ({ product }) => {
	const { addItemToCart, removeItemFromCart, removeAllItemFromCart } =
		useContext(CartContext);

	const { id, name, imageUrl, price, quantity } = product;

	return (
		<div className="checkout-item" key={id}>
			<img src={`${imageUrl}`} />
			<span>{name}</span>
			<span className="item-quantity">
				<LessThanIcon
					className="lessThanIcon"
					width={25}
					height={25}
					onClick={() => removeItemFromCart(product)}
				/>
				{quantity}
				<GreaterThanIcon
					className="greaterThanIcon"
					width={25}
					height={25}
					onClick={() => {
						addItemToCart(product);
					}}
				/>
			</span>
			<span>{price}</span>
			<CloseIcon
				className="closeIcon"
				width={25}
				height={25}
				onClick={() => {
					removeAllItemFromCart(product);
				}}
			/>
		</div>
	);
};

export default CheckoutProduct;
