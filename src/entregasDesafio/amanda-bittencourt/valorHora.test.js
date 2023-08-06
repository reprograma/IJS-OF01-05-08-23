// Testes aqui

const {calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora')

test('Retorna o valor correto no mês', () => {

//setup
const valorPorMes = 5000;


//acao
const result = calcularValorPorHora(valorPorMes)

//verificacao
expect(result).toEqual(29)

});

test('Retorna o valor aproximado correto dado um valor com valor double no mês', () => {

    const valorPorMes = (1750.40);
    const result = calcularValorPorHora(valorPorMes);

    expect(result).toEqual(10);
  });

  test('Espera que quando o valor recebido no mês for igual a 0, não retorne um nulo', () => {
    const valorPorMes = 0;
    const result = calcularValorPorHora(valorPorMes);

    expect(result).not.toBeNaN();
  });
