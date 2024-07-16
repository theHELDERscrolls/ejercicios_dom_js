// 3.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

function createList(array) {
  const ul = document.createElement("ul");

  for (const country of array) {
    let li = document.createElement("li");
    let liText = document.createTextNode(country);
    li.appendChild(liText);
    ul.appendChild(li);
  }
  return document.body.appendChild(ul);
}

createList(countries);

// 3.2 Elimina el elemento que tenga la clase .fn-remove-me.

function eliminate() {
  let eliminatedClass = document.querySelector(".fn-remove-me");
  eliminatedClass.remove();
}

eliminate();

// 3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

function createOtherList(otherArray) {
  const otherUl = document.createElement("ul");
  const div = document.querySelector("div[data-function='printHere']");

  for (const car of otherArray) {
    let otherLi = document.createElement("li");
    let otherLiText = document.createTextNode(car);
    otherLi.appendChild(otherLiText);
    otherUl.appendChild(otherLi);
    div.append(otherUl);
  }
  return document.body.appendChild(div);
}

createOtherList(cars);

// 3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const againCountries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

function countryCards(againArray) {
  for (const againCountry of againArray) {
    let cardDiv = document.createElement("div");
    let h4 = document.createElement("h4");
    let h4Text = document.createTextNode(againCountry.title);
    h4.appendChild(h4Text);
    let img = document.createElement("img");
    img.src = againCountry.imgUrl;
    img.alt = "Imagen random";
    cardDiv.appendChild(h4);
    cardDiv.appendChild(img);
    document.body.appendChild(cardDiv);
  }
}

countryCards(againCountries);

// 3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.
const button = document.createElement("button");
button.textContent = "Elimina el último";
document.body.appendChild(button);

function lastEliminate() {
  const lastDivs = document.querySelectorAll("div"); // NodeList(6) [div, div, div, div, div, div]

  if (lastDivs.length > 1) {
    // así evitamos borrar el div "printHere".
    const lastDiv = lastDivs[lastDivs.length - 1]; // -1 para corregir.
    lastDiv.remove();
  }
}

button.addEventListener("click", lastEliminate);

// 3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.
const oneDivs = document.querySelectorAll("div");

oneDivs.forEach((div) => {
  const oneButton = document.createElement("button");
  oneButton.textContent = "Elimina este";
  div.appendChild(oneButton);

  oneButton.addEventListener("click", () => {
    div.remove();
  });
});

const divCorrect = document.querySelector("div[data-function='printHere']");
const eliminateButton = divCorrect.children[1];
eliminateButton.remove();
