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
describe("Mostrar el precioNeto", () => {
    it("Deberia retornar el valor total", () => {
        const calculatorInstance = new totalizarventas();
        const resultado = calculatorInstance.MostrarPrecioNeto(4,5);
        expect(resultado).toEqual(20);
    });
});

describe("Mostrar el precio ", () => {
    it("Deberia retornar el valor total", () => {
        const calculatorInstance = new totalizarventas();
        const resultado = calculatorInstance.mostrarEstado("CA");
        expect(resultado).toEqual(0.0825);
    });
});
describe("Mostrar el precio total", () => {
    it("Deberia retornar el valor total a", () => {
        const calculatorInstance = new totalizarventas();
        const resultado = calculatorInstance.PrecioTotal(4,5,"CA");
        expect(resultado).toEqual(21.65);
    });
});