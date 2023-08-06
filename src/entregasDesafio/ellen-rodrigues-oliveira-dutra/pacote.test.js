const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote correto para cada projeto', () => {
  test('Retorna o pacote básico caso o número total de horas seja até 50', () => {
    const totalDeHorasPorProjeto = 49;
    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_basico');
  });

  test('Retorna o pacote básico caso o número total de horas seja exatamente 50', () => {
    const totalDeHorasPorProjeto = 50;
    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_basico');
  });

  test('Retorna o pacote intermediário caso o número total de horas seja entre 51 e 100', () => {
    const totalDeHorasPorProjeto = 99;
    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_intermediario');
  });

  test('Retorna o pacote intermediário caso o número total de horas seja exatamente 100', () => {
    const totalDeHorasPorProjeto = 100;
    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_intermediario');
  });

  test('Retorna o pacote premium caso o número total de horas seja entre 101 e 200', () => {
    const totalDeHorasPorProjeto = 109;
    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_premium');
  });

  test('Retorna o pacote premium se o projeto tiver exatamente 200', () => {
    const totalDeHorasPorProjeto = 200;
    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_premium');
  });

  test('Retorna erro se o projeto tiver mais que 200h', () => {
    const totalDeHorasPorProjeto = 250;
    const result = () => calcularPacote(totalDeHorasPorProjeto);

    expect(result).toThrowError();
  });
});
