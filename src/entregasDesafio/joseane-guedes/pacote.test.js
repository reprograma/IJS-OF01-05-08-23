const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe('Calcular pacote correto para cada projeto', () => {
    let totalHoras;

    beforeEach(() => {
        totalHoras = 0; // valor padrão antes de cada teste
    });

    test('Deve retornar o pacote básico para total de horas menor ou igual a 50', () => {
        totalHoras = 50;

        const result = calcularPacote(totalHoras);

        expect(result).toBe('pacote_basico');
    });

    test('Deve retornar o pacote intermediário para total de horas entre 51 e 100', () => {
        totalHoras = 75;

        const result = calcularPacote(totalHoras);

        expect(result).toBe('pacote_intermediario');
    });

    test('Deve retornar o pacote premium para total de horas entre 101 e 200', () => {
        totalHoras = 150;

        const result = calcularPacote(totalHoras);

        expect(result).toBe('pacote_premium');
    });

    test('Deve retornar o pacote premium para total de horas igual a 200', () => {
        totalHoras = 200;

        const result = calcularPacote(totalHoras);

        expect(result).toBe('pacote_premium');
    });

});