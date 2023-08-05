const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe("Valor por hora", () => {
    test("retornar o valor arrendondado correto dando um valor recebido no mês", () => {
        //setup
        const valorPorMes = 5000;

        //acao
        const result = calcularValorPorHora(valorPorMes);
        //verificacao
        expect(result).toEqual(29);
    })
})