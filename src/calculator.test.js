import totalizarventas from "./calculator";

describe("Mostrar la cantidad de Items", () => {
    it("Deberia retornar el mismo numero de Items", () => {
        const calculatorInstance = new totalizarventas();
        const resultado = calculatorInstance.calculadora(5);
        expect(resultado).toEqual(5);
    });
});

  