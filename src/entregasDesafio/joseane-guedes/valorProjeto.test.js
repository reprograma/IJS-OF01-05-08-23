const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe('Calcular o Valor Total do Projeto desenvolvido', () => {
    test('Deve retornar o valor total de um projeto dado as funcionalidades e o valor da pessoa desenvolvedora', () => {
        // Setup
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
        ];
        const valorHora = 70;
        pacote.calcularPacote.mockReturnValue("pacote_basico");

        // Act
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        // Assert
        expect(result).toEqual(3696);
    });
});
