// 4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
const button = document.createElement("button");
button.id = "btnToClick";
button.textContent = "Button";
document.body.appendChild(button);

button.addEventListener("click", (event) => {
  console.log(event);
});

// 4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    console.log(input.value);
  });
});

// 4.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    console.log(input.value);
  });
});
