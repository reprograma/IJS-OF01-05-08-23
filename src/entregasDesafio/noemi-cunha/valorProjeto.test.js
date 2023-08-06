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
	test("retornar o valor total de um projeto dado as todas as funcionalidades e o valor/hora", () => {
		//setup
		const funcionalidades = [
			"setup",
			"responsividade",
			"construcao_1_pagina",
			"construcao_1_pagina",
			"construcao_1_pagina",
			"otimizacao_seo",
			"integracao_mailchimp",
			"integracao_api_propria",
			"ssr",
			"formulario"
		];

		const valorHora = 80;
		//ação
		const result = calcularValorTotalProjeto(funcionalidades, valorHora);
		//verificação
		expect(result).toEqual(10560);
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

		const valorHora = 50;
		//ação
		const result = calcularValorTotalProjeto(funcionalidades, valorHora);
		//verificação
		expect(result).toEqual(2640);
	});
});

describe("Valor total do projeto de acordo com diferentes pacotes e funcionalidades", () => {
	test("retornar o valor total de um projeto dado as funcionalidades e o valor/hora com pacote intermediário", () => {
		pacote.calcularPacote.mockReturnValue("pacote_intermediario");
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
		expect(result).toEqual(3763);
	});

	test("retornar o valor total de um projeto dado as funcionalidades e o valor/hora com pacote premium", () => {
		pacote.calcularPacote.mockReturnValue("pacote_premium");
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
		expect(result).toEqual(3864);
	});
});
