const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe('Calcular o Valor Por Hora trabalhada', () => {

    test('deve retornar o valor arredondado correto dado um valor recebido no mês', () => {
        // Setup
        valorPorMes = 5000;
        // Ação
        const result = calcularValorPorHora(valorPorMes);

        // Verificação
        expect(result).toEqual(29);
    });

    test('deve retornar 0 para valorPorMes igual a 0', () => {
        // setup
        valorPorMes = 0;

        // Ação
        const result = calcularValorPorHora(valorPorMes);

        // Verificação
        expect(result).toEqual(0);
    });

    test('deve arredondar corretamente valores com decimais', () => {
        // setup
        valorPorMes = 7500;

        // Ação
        const result = calcularValorPorHora(valorPorMes);

        // Verificação
        expect(result).toEqual(43);
    });
});
