const {calcularValorTotalProjeto} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote")

describe("Valor total do projeto", ()=>{
    test("Retornar valor total de um projeto dado as funcionalidades e o valor hora da pessoa desejada",()=>{
        //setup
        const funcionalidades = [

            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "formulario",
            "ssr"
        ]
        const valorHora = 70
        //acao
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        //verificacao
        expect(result).toEqual(5645)
    })
    test("Retornar validacao caso funcionalidades sejam passadas vazias ",()=>{
        //setup
        const funcionalidades = [
        ]
        const valorHora = 70
        //acao
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        //verificacao
        expect(result).toEqual(0);
    })
})