const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Valor por hora', () => {
  test('Retorna o valor arredondado correto dado um valor recebido no mês', () => {
    const valorPorMes = 5000;
    const result = calcularValorPorHora(valorPorMes);

    expect(result).toEqual(29);
  });

  test('Retorna o valor arredondado correto dado um valor com casas decimais recebido no mês', () => {
    const valorPorMes = 2300.13;
    const result = calcularValorPorHora(valorPorMes);

    expect(result).toEqual(14);
  });

  test('Retorna o valor correto quando o valor recebido no mês for igual a 0', () => {
    const valorPorMes = 0;
    const result = calcularValorPorHora(valorPorMes);
    
    expect(result).toEqual(0);
  });

});
