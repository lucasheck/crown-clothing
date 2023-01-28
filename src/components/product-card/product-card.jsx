import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

import {
	FooterContainer,
	ProductCardContainer,
	NameSpan,
	PriceSpan,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => {
		addItemToCart(product);
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
				Add to card
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
