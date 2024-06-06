import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
	const APP_ID = '61b0cf58';
	const APP_KEY = 'cb6b953456d32adf9fdae7bf5b868046';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('chicken');
	// const [randKeys, setRandKeys] = useState([]);
	// const [usedKeys, setUsedKeys] = useState([]);

	useEffect(() => {
		getRecipes();
	}, [query]);

	/* 	useEffect(() => {
		const getRecipes = async () => {
			fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=alcohol-free
		
			`)
				.then((x) => x.json())
				.then((y) => setRecipes(y.hits) + console.log(y.hits));
		};
		getRecipes();
	}, [query]); */

	/* 	// CHATGPT FETCH AND RANDOMIZE V2
	const getRecipes = async () => {
		try {
			const response = await fetch(
				`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=alcohol-free`
			);
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			const data = await response.json();

			setRecipes(data);

			generateRandomKeys(data.length);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}; */

	/* // CHATGPT FETCH AND RANDOMIZE V1
	const getRecipes = async () => {
		fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=alcohol-free`
		)
			.then((x) => x.json())
			.then((y) => setRecipes(y.hits) + console.log(y.hits));
		const response = await fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=alcohol-free`
		);
		const data = await response.json();

		const recipeKeys = data.hits.map((hit) => ({
			...hit,
			uniqueKey: generateUniqueRandomValue(),
		}));
		setRecipes(recipeKeys);
	}; */

	/* 	// CHATGPT ADJUSTED FETCH CODE V3
		// THIS CODE IS GARBAGE
		const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	}; */

	/* // CHATGPT ADJUSTED FETCH CODE V2
	// THIS CODE WORKS LIKE ALL THE OTHERS, HOWEVER TURNING X AND Y INTO VARIABLES RESULTS IN EMPTY VARIABLES ANYWAYS, RESULTING IN A WASTE OF CODE
	const getRecipes = async () => {
		let x;
		let y;

		fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=alcohol-free
	
			`)
			.then((response) => response.json())
			.then((data) => {
				x = data;
				return x;
			})
			.then((parsedData) => {
				y = parsedData;
				setRecipes(y.hits);
				console.log(y.hits);
			});
	}; */

	// CHATGPT ADJUSTED FETCH CODE V1
	// I FIND THIS WAY EASIER TO UNDERSTAND AS IT IS MORE FAMILIAR TO ME
	const getRecipes = async () => {
		fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=alcohol-free
	
		`)
			.then((x) => x.json())
			.then((y) => {
				setRecipes(y.hits);
				console.log(y.hits);
			});
	};

	/* 	// AUSTIN FETCH CODE
		// THIS IS THE STANDARD COURSE COMPLETION FETCH CODE
		const getRecipes = async () => {
		fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=alcohol-free
	
		`)
			.then((x) => x.json())
			.then((y) => setRecipes(y.hits) + console.log(y.hits));
	}; */

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
		// console.log(search);
	};

	/* 	// CHATGPT RANDOM GEN V2
	function generateRandomKeys(count) {
		const keys = [...randKeys];
		for (let i = 0; i < count; i++) {
			let countNum;
			do {
				countNum = Math.floor(Math.random() * 100000) + 1;
			} while (keys.includes(countNum));
			keys.push(countNum);
		}
		setRandKeys(keys);
	} */

	/* 	// MY RANDOM GEN V2
	function randoBoiV2(length) {
		let rdmRes = ' ';
		let numbers = '1234567890';
		let numLength = numbers.length;
		for (let i = 0; i < length; i++) {
			rdmRes += numbers.charAt(Math.floor(Math.random() * numLength));
		}
		return rdmRes;
	}
	console.log(randoBoiV2(5)); */

	/* 	// CHATGPT RANDOM GEN V1
	const generateUniqueRandomValue = () => {
		let randomValue;
		do {
			randomValue = Math.floor(Math.random() * 100000) + 1;
		} while (usedKeys.includes(randomValue));
		setUsedKeys((prevKeys) => [...prevKeys, randomValue]);
		return randomValue;
	}; */

	/* 	// AUSTIN RANDOM GEN
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	
	function generateString(length) {
		let result = ' ';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * charactersLength)
			);
		}
		return result;
	}
	console.log(generateString(5)); */

	// MY RANDOM GEN V1
	function randoBoi() {
		let countNum;
		const keys = [];

		do {
			countNum = Math.floor(Math.random() * 100000) + 1;
		} while (keys.includes(countNum));
		if (keys.value === countNum) {
		}
		keys.push(countNum);
	}

	return (
		<div className="App">
			<form className="search-form" onSubmit={getSearch}>
				<input
					className="search-bar"
					type="text"
					value={search}
					onChange={updateSearch}
				/>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			<div className="recipes">
				{recipes.map((recipe /* , index */) => (
					<Recipe
						// CHATGPT RANDOM GEN V2
						// key={generateRandomKeys()}
						// key={randKeys[index]}
						/* // CHATGPT RANDOM GEN V1
						key={recipe.uniqueKey} */
						// key={generateString(0)}
						// PERSONAL RANDOM GEN V1
						key={randoBoi()}
						// key={recipe.recipe.calories}
						// key={recipe.recipe.totalNutrients}
						// key={recipe.recipe.label}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
						url={recipe.recipe.url}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
