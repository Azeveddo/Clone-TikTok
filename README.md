# README - Projeto Clone TikTok EBAC

[![React badge](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat)](https://reactjs.org/)
[![JavaScript badge](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=white&style=flat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS badge](https://img.shields.io/badge/-CSS-1572B6?logo=css3&logoColor=white&style=flat)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Firebase badge](https://img.shields.io/badge/-Firebase-FFCA28?logo=firebase&logoColor=white&style=flat)](https://firebase.google.com/)

Este é um projeto em React para exibição de vídeos em um layout do TikTok. 
O projeto utiliza o Firebase como banco de dados para armazenamento e recuperação dos vídeos. 
Esse projeto é criado junto a equipe da EBAC.

## Como utilizar

Para executar o projeto, é necessário ter o Node.js instalado na máquina. Em seguida, é preciso clonar o repositório e instalar as dependências do projeto. Para isso, execute os seguintes comandos no terminal:
`git clone https://github.com/seu-usuario/projeto-videos.git`
`npm install`

Após a instalação das dependências, crie um projeto no Firebase e adicione as credenciais de acesso ao arquivo `firebase.js` localizado na pasta `config`. 

Por fim, execute o projeto com o comando:
`npm start`

## Arquivos alteráveis

Os arquivos com as estilizações e lógica do projeto podem ser encontrados nas pastas `pages` e `components`. São eles:

- `VideoFooter.css`: estilização do rodapé dos vídeos.
- `VideoFooter.js`: lógica do rodapé dos vídeos.
- `VideoSidebar.css`: estilização da barra lateral dos vídeos.
- `VideoSidebar.js`: lógica da barra lateral dos vídeos.
- `Video.js`: lógica principal dos vídeos.
- `video.css`: estilização dos vídeos.
- `App.js`: lógica principal do aplicativo.
- `App.css`: estilização principal do aplicativo. 

## Linguagens utilizadas

- React
- JavaScript
- CSS
- Firebase
