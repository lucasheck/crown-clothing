import SHOP_DATA from "../../shop-data.json";

const Shop = () => {
	return (
		<div>
			{SHOP_DATA.map(({ id, name, price }) => (
				<div key={id}>
					<h1>{name}</h1>
					<h2>{price}</h2>
				</div>
			))}
		</div>
	);
};

export default Shop;
