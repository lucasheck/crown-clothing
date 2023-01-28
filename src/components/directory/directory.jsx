import { DirectoriesContainer } from "./directory.styles";
import DirectoryItem from "../directory-item/directory-item.jsx";

const Directory = ({ categories }) => {
	return (
		<DirectoriesContainer>
			{categories.map((category) => {
				return <DirectoryItem key={category.id} category={category} />;
			})}
		</DirectoriesContainer>
	);
};

export default Directory;
