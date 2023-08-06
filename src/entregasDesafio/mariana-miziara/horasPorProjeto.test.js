const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Cálculo de horas totais de um projeto", () => {
    test("Dada uma array com as funcionalidades desejadas para o projeto, deve retornar a soma de horas necessárias totais", () => {
        //setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "formulario",
            "ssr"
        ];

        //ação
        const result = calcularHorasDeProjeto(funcionalidades);

        //verificação
        expect(result).toEqual(72);

    })
});