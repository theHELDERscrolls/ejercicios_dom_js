// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.querySelector(".showme");
console.log(button);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const title = document.querySelector("#pillado");
console.log(title);

// 1.3 Usa querySelector para mostrar por consola todos los p
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con
// 	la clase.pokemon
const pokemons = document.querySelectorAll(".pokemon");
console.log(pokemons);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con
// el atributo data-function="testMe".
const characters = document.querySelectorAll("span[data-function='testMe']");
console.log(characters);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".
const character = document.querySelector("span[data-function='testMe']:nth-of-type(3)");
console.log(character);
