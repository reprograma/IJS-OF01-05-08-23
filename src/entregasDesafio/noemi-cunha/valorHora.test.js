const {
	calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

//ESTRUTURA PADRÃO DE TESTE
// describe("descrição geral dos testes", () =>{
//     test("descrição específica do teste", ()=>{
//          setup
//          ação
//          verificação
//     })
// })

describe("Valor por hora", () => {
	test("retornar o valor arredondado correto dado um valor recebido por mês", () => {
		//setup
		const valorPorMes = 5000;
		//ação
		const result = calcularValorPorHora(valorPorMes);
		//verificação
		expect(result).toEqual(29);
	});
	test("retornar o valor 0 para valor nulo", () => {
		//setup
		const valorPorMes = null;
		//ação
		const result = calcularValorPorHora(valorPorMes);
		//verificação
		expect(result).toEqual(0);
	});
	test("retornar o valor 0 se a entrada for não numérica", () => {
		//setup
		const valorPorMes = "teste";
		//ação
		const result = calcularValorPorHora(valorPorMes);
		//verificação
		expect(result).toEqual(NaN);
	});

});
