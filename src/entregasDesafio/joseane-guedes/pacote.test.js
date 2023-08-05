const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe('Calcular o pacote correto para cada projeto', () => {
    let totalHoras;

    beforeEach(() => {
        totalHoras = 0; // valor padrão antes de cada teste
    });

    test('deve retornar o pacote básico para total de horas menor ou igual a 50', () => {
        totalHoras = 50;

        // Act
        const result = calcularPacote(totalHoras);

        // Assert
        expect(result).toBe('pacote_basico');
    });

    test('deve retornar o pacote intermediário para total de horas entre 51 e 100', () => {
        totalHoras = 75;

        // Act
        const result = calcularPacote(totalHoras);

        // Assert
        expect(result).toBe('pacote_intermediario');
    });

    test('deve retornar o pacote premium para total de horas entre 101 e 200', () => {
        totalHoras = 150;

        // Act
        const result = calcularPacote(totalHoras);

        // Assert
        expect(result).toBe('pacote_premium');
    });

    test('deve retornar o pacote premium para total de horas igual a 200', () => {
        totalHoras = 200;

        // Act
        const result = calcularPacote(totalHoras);

        // Assert
        expect(result).toBe('pacote_premium');
    });
});
