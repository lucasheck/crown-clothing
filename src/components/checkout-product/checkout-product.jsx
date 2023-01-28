import {
	CheckoutItem,
	CloseIcon,
	CloseIconDiv,
	GreaterThanIcon,
	ImageContainer,
	ItemQuantity,
	LessThanIcon,
} from "./checkout-product.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

const CheckoutProduct = ({ product }) => {
	const { id, name, imageUrl, price, quantity } = product;

	const { addItemToCart, removeItemFromCart, removeAllItemFromCart } =
		useContext(CartContext);

	const removaAllItemHandler = () => removeAllItemFromCart(product);
	const removeItemFromCartHandler = () => removeItemFromCart(product);
	const addItemToCardHandler = () => addItemToCart(product);

	return (
		<CheckoutItem key={id}>
			<ImageContainer>
				<img src={`${imageUrl}`} alt={`${name} product in Cart`} />
			</ImageContainer>
			<span>{name}</span>
			<ItemQuantity>
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
			</ItemQuantity>
			<span>{price}</span>
			<CloseIconDiv>
				<CloseIcon
					width={25}
					height={25}
					onClick={removaAllItemHandler}
				/>
			</CloseIconDiv>
		</CheckoutItem>
	);
};

export default CheckoutProduct;
