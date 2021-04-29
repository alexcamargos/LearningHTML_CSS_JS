# Layouts Com CSS Grid

Criando um layout com um cabe�alho (header), um menu lateral (aside), o conte�do principal (main) e um rodap� (footer).

###Posicionamento dos elementos

- Header: Em cima da p�gina
- Aside: Na parte esquerda da p�gina
- Main: Na parte direita da p�gina
- Footer: Em baixo da p�gina

### Representa��o em HTML

`<header>Cabe�alho</header>`
`<aside>Menu lateral</aside>`
`<main>Conte�do principal</main>`
`<footer>Rodap�</footer>`

### Posicionando com display grid:

`body {`
  `display: grid;`
  `grid-template-areas:`
    `"header header header"`
    `"aside main main"`
    `"footer footer footer";`
`}`

### Vers�o Final

![](https://raw.githubusercontent.com/alexcamargos/LearningHTML_CSS_JS/master/css-grid-layout/img/css-grid-layout.png)