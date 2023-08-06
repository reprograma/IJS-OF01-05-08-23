const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")
const pacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("valor total do projeto", ()=> {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue("pacote_basico")
    })
    test("Retornar valor total de um projeto dado as funcionalidades e valor hora da pessoa desenvolvedora", ()=> {
        //setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "formulario",
            "ssr"
        ];
        const valorHora = 70;
        //ação
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        //verificação
        expect(result).toEqual(4312)
    });

    test("Retornar 0 quando o valor da hora for 0", () => {
        //setup
        const funcionalidades = [
            "setup",
            "responsividade"
        ];
        const valorHora = 0;
        //ação
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);
        //verificação
        expect(result).toEqual(0);
    });

    test("Retornar 0 quando não houver funcionalidades", () => {
        //setup
        const funcionalidades = [];
        const valorHora = 50;
        //ação
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);
        //verificação
        expect(result).toEqual(0);
    });
});