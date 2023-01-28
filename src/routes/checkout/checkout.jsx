import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import CheckoutProduct from "../../components/checkout-product/checkout-product";

import {
	CheckoutContainer,
	CheckoutDescription,
	CheckoutItemList,
	CheckoutLabel,
	CheckoutTotal,
} from "./checkout.styles";

const Checkout = () => {
	const { cartItems, totalValue } = useContext(CartContext);

	return (
		<CheckoutContainer>
			<CheckoutItemList>
				<CheckoutLabel>
					<span>Product</span>
					<span>Description</span>
					<span>Quantity</span>
					<span>Price</span>
					<span className="span-remove">Remove</span>
				</CheckoutLabel>
				<CheckoutDescription>
					{cartItems.map((product) => (
						<CheckoutProduct
							key={product.id}
							product={product}
						></CheckoutProduct>
					))}
				</CheckoutDescription>
				<CheckoutTotal>TOTAL: ${totalValue}</CheckoutTotal>
			</CheckoutItemList>
		</CheckoutContainer>
	);
};

export default Checkout;
