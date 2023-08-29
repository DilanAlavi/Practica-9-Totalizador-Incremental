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
describe("Mostrar el precio total con CA", () => {
    it("Deberia retornar el valor total a", () => {
        const calculatorInstance = new totalizarventas();
        const resultado = calculatorInstance.PrecioTotal(4,5,"CA");
        expect(resultado).toEqual(21.65);
    });
});
describe("Mostrar el precio total con TX", () => {
    it("Deberia retornar el valor total a", () => {
        const calculatorInstance = new totalizarventas();
        const resultado = calculatorInstance.PrecioTotal(1,2,"TX");
        expect(resultado).toEqual(2.125);
    });
});
describe("Mostrar el precio total con AL", () => {
    it("Deberia retornar el valor total a", () => {
        const calculatorInstance = new totalizarventas();
        const resultado = calculatorInstance.PrecioTotal(10,20,"AL");
        expect(resultado).toEqual(208);
    });
});
describe("Mostrar el precio total con NV", () => {
    it("Deberia retornar el valor total a", () => {
        const calculatorInstance = new totalizarventas();
        const resultado = calculatorInstance.PrecioTotal(15,14,"NV");
        expect(resultado).toEqual(226.8);
    });
});
describe("Mostrar el precio total con UT", () => {
    it("Deberia retornar el valor total a", () => {
        const calculatorInstance = new totalizarventas();
        const resultado = calculatorInstance.PrecioTotal(12,19,"UT");
        expect(resultado).toEqual(243.162);
    });
});
describe("Mostrar el precio total con el Porcentaje de descuento que corresponde a 1000", () => {
    it("Deberia retornar el valor total a", () => {
        const calculatorInstance = new totalizarventas();
        const resultado = calculatorInstance.PrecioTotal(500,3,"UT");
        expect(resultado).toEqual(1554.75);
    });
});
describe("Mostrar el precio total con el Porcentaje de descuento que corresponde a 3000", () => {
    it("Deberia retornar el valor total a", () => {
        const calculatorInstance = new totalizarventas();
        const resultado = calculatorInstance.PrecioTotal(500,6,"UT");
        expect(resultado).toEqual(3049.5);
    });
});