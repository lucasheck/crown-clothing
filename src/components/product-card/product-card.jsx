import { useSelector, useDispatch } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import {
	FooterContainer,
	ProductCardContainer,
	NameSpan,
	PriceSpan,
} from "./product-card.styles";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const { name, imageUrl, price } = product;
	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => {
		dispatch(addItemToCart(cartItems, product));
	};

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<FooterContainer>
				<NameSpan>{name}</NameSpan>
				<PriceSpan>{price}</PriceSpan>
			</FooterContainer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}
			>
				Add to cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
