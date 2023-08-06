const {
	calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

//ESTRUTURA PADRÃO DE TESTE
// describe("descrição geral dos testes", () =>{
//     test("descrição específica do teste", ()=>{
//          setup
//          ação
//          verificação
//     })
// })

describe("Calculo de horas totais de um projeto", () => {
	test("dado um array com as funcionalidades desejadas do projeto, deve retornar a soma de horas necessárias", () => {
		//setup
		const funcionalidades = [
			"setup",
			"responsividade",
			"construcao_1_pagina",
			"construcao_1_pagina",
			"construcao_1_pagina",
			"formulario",
			"ssr",
		];
		//ação
		const result = calcularHorasDeProjeto(funcionalidades);
		//verificação
		expect(result).toEqual(72);
	});
});
