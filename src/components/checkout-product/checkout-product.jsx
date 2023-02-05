import {
	CheckoutItem,
	CloseIcon,
	CloseIconDiv,
	GreaterThanIcon,
	ImageContainer,
	ItemQuantity,
	LessThanIcon,
} from "./checkout-product.styles";
import { useSelector, useDispatch } from "react-redux";
import {
	removeAllItemFromCart,
	removeItemFromCart,
	addItemToCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutProduct = ({ product }) => {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const { id, name, imageUrl, price, quantity } = product;

	const removaAllItemHandler = () =>
		dispatch(removeAllItemFromCart(cartItems, product));
	const removeItemFromCartHandler = () =>
		dispatch(removeItemFromCart(cartItems, product));
	const addItemToCardHandler = () =>
		dispatch(addItemToCart(cartItems, product));

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
