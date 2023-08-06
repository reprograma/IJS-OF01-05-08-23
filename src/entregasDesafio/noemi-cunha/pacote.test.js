const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

//ESTRUTURA PADRÃO DE TESTE
// describe("descrição geral dos testes", () =>{
//     test("descrição específica do teste", ()=>{
//          setup
//          ação
//          verificação
//     })
// })

describe("Calcular pacote correto para cada projeto", () => {
	test("Retorne um pacote básico caso o numero total de horas seja até 50h", () => {
		//setup
		const totalDeHorasPorProjeto = 49;
		//ação
		const result = calcularPacote(totalDeHorasPorProjeto);
		//verificação
		expect(result).toEqual("pacote_basico");
	});

	test("Retorne um pacote básico caso o numero total de horas seja de 50h", () => {
		//setup
		const totalDeHorasPorProjeto = 50;
		//ação
		const result = calcularPacote(totalDeHorasPorProjeto);
		//verificação
		expect(result).toEqual("pacote_basico");
	});

	test("Retorne um pacote intermediário caso o numero total de horas seja de 50h até 100h", () => {
		//setup
		const totalDeHorasPorProjeto = 75;
		//ação
		const result = calcularPacote(totalDeHorasPorProjeto);
		//verificação
		expect(result).toEqual("pacote_intermediario");
	});

	test("Retorne um pacote intermediário caso o numero total de horas seja de 100h", () => {
		//setup
		const totalDeHorasPorProjeto = 100;
		//ação
		const result = calcularPacote(totalDeHorasPorProjeto);
		//verificação
		expect(result).toEqual("pacote_intermediario");
	});

	test("Retorne um pacote intermediário caso o numero total de horas seja de 100h até 200h", () => {
		//setup
		const totalDeHorasPorProjeto = 150;
		//ação
		const result = calcularPacote(totalDeHorasPorProjeto);
		//verificação
		expect(result).toEqual("pacote_premium");
	});

	test("Retorne um pacote premium caso o numero total de horas seja de 200h", () => {
		//setup
		const totalDeHorasPorProjeto = 200;
		//ação
		const result = calcularPacote(totalDeHorasPorProjeto);
		//verificação
		expect(result).toEqual("pacote_premium");
	});
});
