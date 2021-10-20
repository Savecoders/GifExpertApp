import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import NavBar from './components/NavBar';
const GitExpertApp = () => {
	/* const categories = [
		'One Piece',
		'Hunter X Hunter',
		'Full Metal Alchemist',
		'One Punch',
	]; */
	const [categories, setCategories] = useState(['Full Metal Alchemists']);
	/* const handleAdd = () => setCategories((cats) => [...cats, 'Boku no hero']);
	const handleDelete = () => setCategories((cats) => cats.splice(0, cats.length - 1)); */
	/* 	categories.filter((categorie) => categorie !== categories[categories.length - 1]) */
	return (
		<>
			<NavBar title={'GifExpertApp'} />
			<AddCategory setCategories={setCategories} />
			{/*The keys are an important part for reactj to take into account
         the state of our application and thus have a specific order and
        if any change was made, react will take it into account */}
			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};

export default GitExpertApp;
