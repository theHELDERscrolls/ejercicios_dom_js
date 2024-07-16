// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let otherDiv = document.createElement("div");
let paragraph = document.createElement("p");

otherDiv.appendChild(paragraph);
document.body.appendChild(otherDiv);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
let loopDiv = document.createElement("div");

for (let i = 0; i <= 6; i++) {
  let otherParagraph = document.createElement("p");
  loopDiv.appendChild(otherParagraph);
}

document.body.appendChild(loopDiv);

// 2.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.
let newP = document.createElement("p");
let pText = document.createTextNode("¡Soy dinámico!");
newP.appendChild(pText);

document.body.appendChild(newP);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector(".fn-insert-here");
let h2Text = document.createTextNode("Wubba Lubba dub dub");

h2.appendChild(h2Text);

// 2.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

let list = document.createElement("ul");

for (const app of apps) {
  let social = document.createElement("li");
  let liText = document.createTextNode(app);
  social.appendChild(liText);
  list.appendChild(social);
}

document.body.appendChild(list);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let eliminates = document.querySelectorAll(".fn-remove-me");
// NodeList(4) [p.fn-remove-me, p.fn-remove-me, p.fn-remove-me, p.fn-remove-me]
console.log(eliminates);

for (const eliminate of eliminates) {
  eliminate.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
let newParagraph = document.createElement("p");
let newParagraphText = document.createTextNode("¡Voy en medio!");
newParagraph.appendChild(newParagraphText);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here
let againDivs = document.querySelectorAll("div.fn-insert-here");
// NodeList(2) [div.fn-insert-here, div.fn-insert-here]
console.log(againDivs);

for (const againDiv of againDivs) {
  let otherNewP = document.createElement("p");
  let otherNewPText = document.createTextNode("¡Voy dentro!");
  otherNewP.appendChild(otherNewPText);
  againDiv.appendChild(otherNewP);
}
