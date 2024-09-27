My Landing Page
Este projeto é uma landing page construída com React utilizando o Vite e faz o consumo de uma API de receitas. O objetivo é exibir dados de diferentes rotas da API de forma visualmente agradável.

Funcionalidades
Consumo de API REST com Axios
Exibição de dados de receitas
Layout responsivo e interativo

Tecnologias Utilizadas
React com Vite
Axios para consumo da API
CSS Modules para estilização
Como rodar o projeto localmente
Clone este repositório:

bash
Copiar código
git clone https://github.com/samuelsilva502/my-landing-page.git
cd my-landing-page
Instale as dependências:

bash
Copiar código
npm install
Rode o projeto:

bash
Copiar código
npm run dev
Acesse http://localhost:3000 no navegador.

API
Este projeto consome uma API para exibir as receitas em diferentes seções. A API utilizada possui as seguintes rotas:

GET /recipes?type=cafe-da-manha - Retorna receitas de café da manhã
GET /recipes?type=almoco - Retorna receitas de almoço
GET /recipes?type=jantar - Retorna receitas de jantar
Estrutura do Projeto
css
Copiar código
/src
  ├── /components
  │   ├── Header.js
  │   ├── Section.js
  │   └── Footer.js
  ├── api.js
  ├── App.js
  └── index.css
Commits
Este projeto utiliza a convenção de commits semânticos e boas práticas de versionamento.

Links
Link do Projeto no GitHub
Apresentação no LinkedIn
