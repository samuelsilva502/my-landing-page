import express from 'express';
import recipes from './data/recipes.js';

const app = express();

app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

app.get('/api/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const recipe = recipes.find((recipe) => recipe.id === id);
  if (!recipe) {
    res.status(404).json({ message: 'Receita não encontrada' });
  } else {
    res.json(recipe);
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});