const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");
const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular pacote correto para cada projeto", () =>{
    test("Retornar um pacote básico caso o número total de horas seja até 50 horas", () =>{
        //setup
        const totalDaHorasPorProjeto = 49;

        //acao
       const result = calcularPacote(totalDaHorasPorProjeto);
        //verificacao
       expect(result).toEqual("pacote_basico")
    })

    test("Retornar o pacote basico caso o número total seja exatamente 50", () => {
        //setup
        const totalDaHorasPorProjeto = 50;

        //verificacao
        const result = calcularPacote(totalDaHorasPorProjeto);

        //verificacao
        expect(result).toEqual('pacote_basico');
    })

    test ("Retornar o pacote intermediário caso o número de horas seja entre 51 e 100", () =>{
        //setup
        const totalDaHorasPorProjeto = 80;

        //verificacao
        const result = calcularPacote(totalDaHorasPorProjeto);

        //vericacao
        expect(result).toEqual('pacote_intermediario')
    })

    test("Retorne o pacote intermediário caso o número de horas seja exatamente 100", () =>{
        //setup
        const totalDaHorasPorProjeto = 100;

        //acao
        const result = calcularPacote(totalDaHorasPorProjeto);

        //verificacao
        expect(result).toEqual("pacote_intermediario")
    })

    test(" Retorna o pacote premium se o projeto tiver exatamente 200h", ()=> {

        //setup
        const totalDaHorasPorProjeto = 200;

        //acao

        const result = calcularPacote(totalDaHorasPorProjeto);

        //verificacao

        expect(result).toEqual("pacote_premium")
    })
     
    test("Retorna o pacote premium caso o número total seja de horas a partir de 201", ()=> {
        //setup
        const totalDaHorasPorProjeto = 210;

        //acao
        const result = calcularPacote(totalDaHorasPorProjeto)

        //verificacao
        expect(result).toEqual("pacote_premium");

    })
});


describe("Calcular Horas de Projeto", () => {
  test("Se a lista contendo 3 funcionalidades terá X horas", () => {
    const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"]
    expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24)
  })

  test("Calcular horas quando não existe a funcionalidade", () => {
    const listaDeFuncionalidadeInexistente = ["testes"]
    expect(calcularHorasDeProjeto(listaDeFuncionalidadeInexistente)).toBeNaN()
  }) 

  test("Todas as funcionalidades retornam 104 horas de projeto", () => {
    const listaTodasFuncionalidades = [
        "setup",
        "formulario",
        "responsividade",
        "otimizacao_seo",
        "construcao_1_pagina",
        "integracao_mailchimp",
        "ssr",
        "integracao_api_propria"
    ]
    expect(calcularHorasDeProjeto(listaTodasFuncionalidades)).toBe(104)
  })
});