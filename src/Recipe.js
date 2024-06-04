import React from 'react';

const Recipe = ({title, calories, image}) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{calories}</p>
			<img src={image} alt="" />
		</div>
	);
};

/*     return (
        <div>
            <h1>Title</h1>
            <p>Calories</p>
            <img src="" alt="" />
        </div>
    ) */
export default Recipe;
