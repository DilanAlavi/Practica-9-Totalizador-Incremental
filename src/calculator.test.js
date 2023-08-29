import totalizarventas from "./calculator";

describe("Mostrar la cantidad de Items", () => {
    it("Deberia retornar el mismo numero de Items", () => {
        const calculatorInstance = new totalizarventas();
        const resultado = calculatorInstance.MostrarCantItem(5);
        expect(resultado).toEqual(5);
    });
});
describe("Mostrar el precio de Items", () => {
    it("Deberia retornar el mismo numero de Items", () => {
        const calculatorInstance = new totalizarventas();
        const resultado = calculatorInstance.MostrarPrecioItem(5);
        expect(resultado).toEqual(5);
    });
});
  