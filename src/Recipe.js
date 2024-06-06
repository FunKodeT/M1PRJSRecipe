import React from 'react';
import styles from './recipe.module.css';

/* const calories = ({calories}) => {
	let calories
	calories = Math.floor(calories.value)
	return calories
} */

const Recipe = ({title, calories, image, ingredients, url}) => {
	return (
		<div className={styles.recipe}>
			<a href={url} target="_blank">
				<h1>{title}</h1>
			</a>
			<ol>
				{ingredients.map((ingredients) => (
					<li>{ingredients.text}</li>
				))}
			</ol>
			<fieldset>
				<a href={url}>
					<img className={styles.image} src={image} alt="" />
				</a>
				<label className={styles.calCount}>
					{Math.floor(calories)} Cal
				</label>
			</fieldset>
		</div>
	);
};

export default Recipe;
