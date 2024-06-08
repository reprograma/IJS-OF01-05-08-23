const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calculo de horas totais de um projeto", ()=> {
    test("Dado um array com as funcionalidades desejadas do projeto, deve retornar a soma de horas necessarias totais", ()=> {
        //setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "formulario",
            "ssr"
        ]
        //ação
        const result = calcularHorasDeProjeto(funcionalidades)
        //verificação
        expect(result).toEqual(56)
    })

    //teste tem que mudar o código
    test("Deve retornar 0 para um projeto sem funcionalidades", () => {
        //setup
        const funcionalidades = [];
        //ação
        const result = calcularHorasDeProjeto(funcionalidades);
        //verificação
        expect(result).toEqual(0);
    });

    //teste tem que mudar o código
    test("Deve retornar 0 para funcionalidades não definidas", () => {
        //setup
        const funcionalidades = ["funcionalidade_indefinida"];
        //ação
        const result = calcularHorasDeProjeto(funcionalidades);
        //verificação
        expect(result).toEqual(0);
    });

    test("Deve somar corretamente para funcionalidades repetidas", () => {
        //setup
        const funcionalidades = [
            "setup", 
            "setup", 
            "formulario"
        ];
        //ação
        const result = calcularHorasDeProjeto(funcionalidades);
        //verificação
        expect(result).toEqual(32); 
    });
})