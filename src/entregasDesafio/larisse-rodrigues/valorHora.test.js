const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe("valor por hora", () => {
  test("retornar o valor arredondado correto dado um valor recebido no mês", () => {
    //setup
    const valorPorMes = 5000;

    //ação
    const result = calcularValorPorHora(valorPorMes);

    //verificação
    expect(result).toEqual(29);
  });


  test("retornar o valor arredondado correto para valor por mês igual a 0", () => {
    // Setup
    const valorPorMes = 0;

    // Ação
    const result = calcularValorPorHora(valorPorMes);

    // Verificação
    expect(result).toEqual(0);
  });

  test("retornar o valor arredondado correto para valor por mês menor que 1000", () => {
    // Setup
    const valorPorMes = 999;

    // Ação
    const result = calcularValorPorHora(valorPorMes);

    // Verificação
    expect(result).toEqual(6);
  });

  test("retornar o valor arredondado correto para valor por mês igual a 1000", () => {
    // Setup
    const valorPorMes = 1000;

    // Ação
    const result = calcularValorPorHora(valorPorMes);

    // Verificação
    expect(result).toEqual(6);
  });

  test("retornar o valor arredondado correto para valor por mês maior que 1000 e menor que 2000", () => {
    // Setup
    const valorPorMes = 1500;

    // Ação
    const result = calcularValorPorHora(valorPorMes);

    // Verificação
    expect(result).toEqual(9);
  });

  test("retornar o valor arredondado correto para valor por mês igual a 2000", () => {
    // Setup
    const valorPorMes = 2000;

    // Ação
    const result = calcularValorPorHora(valorPorMes);

    // Verificação
    expect(result).toEqual(12);
  });

  test("retornar o valor arredondado correto para valor por mês maior que 2000", () => {
    // Setup
    const valorPorMes = 2500;

    // Ação
    const result = calcularValorPorHora(valorPorMes);

    // Verificação
    expect(result).toEqual(15);
  });

});
