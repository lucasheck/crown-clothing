import { useSelector } from "react-redux";

import CheckoutProduct from "../../components/checkout-product/checkout-product";
import {
	CheckoutContainer,
	CheckoutDescription,
	CheckoutItemList,
	CheckoutLabel,
	CheckoutTotal,
} from "./checkout.styles";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const totalValue = useSelector(selectCartTotal);

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
