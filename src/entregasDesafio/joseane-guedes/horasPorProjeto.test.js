const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calcular horas totais de um projeto', () => {
    test('Dado uma array com as funcionalidades desejadas do projeto, deve retornar a soma de horas necessárias totais', () => {
        // setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "formulario",
            "ssr"
        ]
        // acao
        const result = calcularHorasDeProjeto(funcionalidades)
        // verificacao
        expect(result).toEqual(72)
    });

    test('deve retornar 0 para uma array vazia de funcionalidades', () => {
        // Setup
        const funcionalidades = [];

        // Ação
        const result = calcularHorasDeProjeto(funcionalidades);

        // Verificação
        expect(result).toEqual(0);
    });
});
