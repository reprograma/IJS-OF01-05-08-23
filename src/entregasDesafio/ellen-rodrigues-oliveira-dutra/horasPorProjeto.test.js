const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Cálculo de horas totais de um projeto', () => {
  test('Dada uma array com as funcionalidades desejadas do projeto, deve retornar a soma de horas necessárias totais', () => {
    const funcionalidades = [
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'formulario',
      'ssr',
    ];

    const result = calcularHorasDeProjeto(funcionalidades);
    expect(result).toEqual(72);
  });

  test('Dada uma array sem funcionalidades, deve retornar 0', () => {
    const funcionalidades = [];

    const result = calcularHorasDeProjeto(funcionalidades);
    expect(result).toEqual(0);
  });

});
