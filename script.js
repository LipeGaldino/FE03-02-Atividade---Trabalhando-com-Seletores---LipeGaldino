// getElementById
// getElementByClassName
// getElementByTagName
// querySelector
// querySelectorAll

/*
  1. Selecione o elemento de id "ingredients" e o atribua a uma constante.  
  Mostre somente o elemento selecionado no console.
*/
// const ingredients = document.getElementById("ingredients");

// /*
//   2. Selecione o elemento <h1> e o atribua a uma constante.
//    Mostre somente o elemento selecionado no console.
// */
// const h1 = document.getElementsByTagName("h1");

// /*
//   3. Selecione o elemento com classe "recipe" e o atribua a uma constante.
//    Mostre somente elemento selecionado no console.
// */
// const recipe = document.getElementsByClassName("recipe");

/*
  Desafio 1: Selecione todos os elementos <h2> da página e altere a cor do texto de
   todos para azul.
*/
const subtitles = document.getElementsByTagName("h2");

for(let i = 0; i < subtitles.length; i++){
  subtitles[i].style.color = "blue";
}
/* 
  Desafio 2: Selecione todos os elementos <input> da página, e altere a cor da borda de
   todos para vermelho.
*/
const inputs = document.getElementsByTagName("input")
for(let i = 0; i < inputs.length; i++){
  inputs[i].style.borderColor = "red"
}