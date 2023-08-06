const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe("descrição geral dos testes", () => {
    test("retornar o valor arredondado correto dado um valor recebido no mês", () => {
        //setup (o que a função precisa pra ser executada)
        const valorPorMes = 5000;

        //ação
        const result = calcularValorPorHora(valorPorMes);

        //verificação
        expect(result).toEqual(29);

    })
})