import "./directory-item.scss";

const DirectoryItem = ({ category }) => {
	const { id, title, imageUrl } = category;
	return (
		<div key={id} className="directory-container">
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="directory-body">
				<h2>{title}</h2>
				<p>SHOP NOW</p>
			</div>
		</div>
	);
};

export default DirectoryItem;
