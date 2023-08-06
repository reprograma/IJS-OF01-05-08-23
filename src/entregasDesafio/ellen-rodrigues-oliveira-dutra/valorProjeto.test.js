const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js');

describe('Valor total do projeto', () => {
  test('Retorna o valor total de um projeto dado o conjunto de funcionalidades e o valor por hora da pessoa desenvolvedora, usando o pacote básico', () => {
    pacote.calcularPacote.mockReturnValue('pacote_basico');
    const funcionalidades = [
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'construcao_1_pagina',
    ];

    const valorHora = 70;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(3696);

  });

  test('Retorna o valor total de um projeto dado o conjunto de funcionalidades e o valor por hora da pessoa desenvolvedora, usando o pacote intermediário', () => {
    pacote.calcularPacote.mockReturnValue('pacote_intermediario');
    const funcionalidades = [
      'setup',
      'formulario',
      'integracao_mailchimp',
      'ssr'
    ];

    const valorHora = 60;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(3226);
  });

  test('Retorna o valor total de um projeto dado o conjunto de funcionalidades e o valor por hora da pessoa desenvolvedora, usando o pacote premium', () => {
    pacote.calcularPacote.mockReturnValue('pacote_premium');
    const funcionalidades = [
      'setup',
      'formulario',
      'otimizacao_seo',
      'integracao_api_propria',
      'responsividade'
    ];

    const valorHora = 80;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(6624);
  });

});
