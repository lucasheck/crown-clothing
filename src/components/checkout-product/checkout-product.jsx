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

	const removaAllItemHandler = () => removeAllItemFromCart(product);
	const removeItemFromCartHandler = () => removeItemFromCart(product);
	const addItemToCardHandler = () => addItemToCart(product);

	return (
		<div className="checkout-item" key={id}>
			<div className="image-container">
				<img src={`${imageUrl}`} alt={`${name} product in Cart`} />
			</div>
			<span>{name}</span>
			<span className="item-quantity">
				<LessThanIcon
					className="lessThanIcon"
					width={25}
					height={25}
					onClick={removeItemFromCartHandler}
				/>
				{quantity}
				<GreaterThanIcon
					className="greaterThanIcon"
					width={25}
					height={25}
					onClick={addItemToCardHandler}
				/>
			</span>
			<span>{price}</span>
			<div className="closeIcon-div">
				<CloseIcon
					className="closeIcon"
					width={25}
					height={25}
					onClick={removaAllItemHandler}
				/>
			</div>
		</div>
	);
};

export default CheckoutProduct;
