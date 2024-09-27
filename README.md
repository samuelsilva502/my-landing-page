
# COOKBOOK API

Este projeto é uma **landing page** construída com **React** utilizando o **Vite** e faz o consumo de uma API de receitas. O objetivo é exibir dados de diferentes rotas da API de forma visualmente agradável, com uso de ícones, fontes customizadas e animações.

## Funcionalidades

- Consumo de API REST com Axios
- Exibição de dados de receitas
- Layout responsivo e interativo
- Animações e ícones customizados

## Tecnologias Utilizadas

- **React** com Vite
- **Axios** para consumo da API
- **CSS Modules** para estilização

## Como rodar o projeto localmente

1. Clone este repositório:

   ```bash
   git clone https://github.com/samuelsilva502/my-landing-page.git
   cd my-landing-page
   
2. Instale as dependências:
   
   ```bash
   npm install
   
3. npm run dev

   ```bash
   npm run dev
   
4. Acesse http://localhost:3000 no navegador.

## API
Este projeto consome uma API para exibir as receitas em diferentes seções. A API utilizada possui as seguintes rotas:

1. GET /recipes?type=cafe-da-manha - Retorna receitas de café da manhã
2. GET /recipes?type=almoco - Retorna receitas de almoço
3. GET /recipes?type=jantar - Retorna receitas de jantar

# Estrutura do projeto

```css
   /src
  ├── /components
  │   ├── Header.js
  │   ├── Section.js
  │   └── Footer.js
  ├── api.js
  ├── App.js
  └── index.css


## Links:
Link do Projeto no GitHub

Apresentação no LinkedIn

