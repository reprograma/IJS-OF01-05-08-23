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

    //O que acontece se vai uma funcionalidade que não está na lista?
    test("Retorna NaN se houver uma funcionalidade que não está previamente listada", () => {
        //setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_2_pagina",
            "construcao_3_pagina",
            "formulario",
            "ssr"
        ];

        //ação
        const result = calcularHorasDeProjeto(funcionalidades);

        //verificação
        expect(result).toEqual(NaN);

    })

});