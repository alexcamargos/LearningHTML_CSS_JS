# Layouts Com CSS Grid

Criando um layout com um cabeçalho (header), um menu lateral (aside), o conteúdo principal (main) e um rodapé (footer).

###Posicionamento dos elementos

- Header: Em cima da página
- Aside: Na parte esquerda da página
- Main: Na parte direita da página
- Footer: Em baixo da página

### Representação em HTML

`<header>Cabeçalho</header>`
`<aside>Menu lateral</aside>`
`<main>Conteúdo principal</main>`
`<footer>Rodapé</footer>`

### Posicionando com display grid:

`body {`
  `display: grid;`
  `grid-template-areas:`
    `"header header header"`
    `"aside main main"`
    `"footer footer footer";`
`}`

### Versão Final

![](https://raw.githubusercontent.com/alexcamargos/LearningHTML_CSS_JS/master/css-grid-layout/img/css-grid-layout.png)