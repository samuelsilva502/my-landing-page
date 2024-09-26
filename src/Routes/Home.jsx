import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="home">
      <h1>Receitas</h1>
      {recipes.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            <ol>
              {recipe.instructions.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ol>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;