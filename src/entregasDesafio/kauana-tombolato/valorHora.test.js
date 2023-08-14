const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe("Valor por hora", ()=>{
    test("retornar o valor arredondado correto dado um valor recebido no mês", ()=>{
        //setup
        const valorPorMes = 5000;
        //ação
        const result = calcularValorPorHora(valorPorMes)
        //verificação
        expect(result).toEqual(29)
    });

    test("Retornar 0 quando o valor mensal for 0", () => {
        //setup
        const valorPorMes = 0;
        //ação
        const result = calcularValorPorHora(valorPorMes);
        //verificação
        expect(result).toEqual(0);
    });

    test("Retornar 0 quando o valor mensal for negativo", () => {
        //setup
        const valorPorMes = -1000;
        //ação
        const result = calcularValorPorHora(valorPorMes);
        //verificação
        expect(result).toEqual(0);
    });

    test("Retornar valor arredondado para cima em uma renda mensal decimal", () => {
        //setup
        const valorPorMes = 1234.56;
        //ação
        const result = calcularValorPorHora(valorPorMes);
        //verificação
        expect(result).toEqual(8); 
    });
})