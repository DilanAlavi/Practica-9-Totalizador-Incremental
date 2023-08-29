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
  //const resultado= calculator.ObtenerImpuestoPorEstado(estado.value);
  const impuesto = calculator.mostrarEstado(estado.value);
  const PrecioNeto=calculator.MostrarPrecioNeto(firstNumber,secondNumber);
  const ImpuestoEstado=calculator.ObtenerImpuestoPorEstado(PrecioNeto,estado.value);
  const PrecioTotal= calculator.PrecioTotal(firstNumber,secondNumber,estado.value);

  div.innerHTML = "<p>Precio neto  " + "("+firstNumber+"*$"+secondNumber +")"+
  " = " +"$"+PrecioNeto + "</p>"+"<p>El Impuesto para: "+ estado.value+" % "+ impuesto +" : "+"$"+ImpuestoEstado+ "</p>"+
  "<p>El Precio total es de :"+"$"+ PrecioTotal+"</p>";
});
