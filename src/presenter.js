import totalizarventas from "./calculator";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const estado= document.querySelector("#estado-select");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const calculator= new totalizarventas();
  const resultado= calculator.ObtenerImpuestoPorEstado(estado.value);

  div.innerHTML = "<p>El estado elegido es: " + resultado + "</p>";
});
