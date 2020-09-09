import React from 'react';
import {v1 as uuid} from 'uuid';

function Recipe({title, calories, image, ingredients}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt={title} />
            <ol>
                {ingredients.map(ingredient => (
                    <li key={uuid()}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe
