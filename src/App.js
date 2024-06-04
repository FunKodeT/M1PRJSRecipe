import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
// import logo from './logo.svg';
import './App.css';

const App = () => {
	const APP_ID = '61b0cf58';
	const APP_KEY = 'cb6b953456d32adf9fdae7bf5b868046';
	// const exRqst = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

	// const [counter, setCounter] = useState(0);

	const [recipes, setRecipes] = useState([]);

	useEffect(async () => {
		getRecipes();
		// console.log('Effect has been run');
	}, []);

	// useEffect(() => {
	// 	console.log('Effect has been run');
	// }, [counter]);

	// useEffect(() => {
	// 	console.log('Effect has been run');
	// });

	// When useEffect is loaded, will always run on first-time page load as well as whenever the page is re-rendered.
	// Using an array [] after the curly braces {} will result in the Effect only running on first-time page load
	// Using an array [] after the curly braces {} with a value within EX: {counter} will result in the Effect running on first-time page load, in addition to anytime the value is re-rendered

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = response.json();
		setRecipes(data.hits);
		console.log(data.hits);
		// console.log(data);

		// Below is an alternative way of writing this code:
		// fetch(
		// 	`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
		// ).then((response) => {
		// 	response.json;
		// });
	};

	return (
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text" />
				<button className="search-button" type="submit">
					Search
				</button>
				{/* <button
					className="search-button"
					onClick={() => setCounter(counter + 1)}
					type="submit">
					{counter}
				</button> */}
			</form>
			{recipes.map((recipe) => (
				// Below is an example of destructuring an API json to get specific parts out for use:
				<Recipe
					title={recipe.recipe.label}
					calories={recipe.recipe.calories}
					image={recipe.recipe.image}
				/>
				// The basic result of this is that, a 'title' variable will be equal to the value of [Recipe variable>recipe array>recipe name>recipe title]
			))}
			{/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
			{/* <h1>Hello React</h1> */}
		</div>
	);
};
// function App() {
// 	return (
// 		<div className="App">
// 			<h1>Hello React</h1>
// 		</div>
// 	);
// }

export default App;
