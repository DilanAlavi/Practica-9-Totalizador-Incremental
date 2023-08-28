import totalizarventas from "./calculator";

const first = document.querySelector("#primer-numero");
//const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  //const secondNumber = Number.parseInt(second.value);
  const calculator= new totalizarventas();
  const resultado= calculator.calculadora(firstNumber);

  div.innerHTML = "<p>La cantidad ingresada es: " + resultado + "</p>";
});
