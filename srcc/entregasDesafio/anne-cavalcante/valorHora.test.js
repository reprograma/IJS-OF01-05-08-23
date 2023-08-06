// Teste que retorna valor arredondado do valor por hora, recebido um determinado valor por mês
const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe("Valor por hora", ()=>{
    test("retornar o valor arredondado correto dado um valor recebido no mês", ()=> {
        //setup
        const valorPorMes = 5000;
        //acao
        const result = calcularValorPorHora(valorPorMes);
        //verificacao
        expect(result).toEqual(29);  //valor certo para o teste 29
    })

})