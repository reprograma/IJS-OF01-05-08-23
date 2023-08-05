const {
	calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");

const pacote = require("../../dominio/calculadora/Projeto/pacote.js");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

//ESTRUTURA PADRÃO DE TESTE
// describe("descrição geral dos testes", () =>{
//     test("descrição específica do teste", ()=>{
//          setup
//          ação
//          verificação
//     })
// })

describe("Valor total do projeto", () => {
	beforeEach(() => {
		pacote.calcularPacote.mockReturnValue("pacote_basico");
	});
	test("retornar o valor total de um projeto dado as funcionalidades e o valor/hora", () => {
		//setup
		const funcionalidades = [
			"setup",
			"responsividade",
			"construcao_1_pagina",
			"construcao_1_pagina",
			"construcao_1_pagina",
		];

		const valorHora = 70;
		//ação
		const result = calcularValorTotalProjeto(funcionalidades, valorHora);
		//verificação
		expect(result).toEqual(3696);
	});
});
