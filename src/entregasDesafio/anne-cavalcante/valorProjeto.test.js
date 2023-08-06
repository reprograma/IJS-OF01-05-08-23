const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote.js");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("Valor total do projeto", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");
  });
  test("Retornar valor total de um projeto dado as funcionalidades e o valor da hora da pessa designada", () => {
    //review essa linha
    //setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ];
    const valorHora = 70;
    //acao
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);
    //verificacao
    expect(result).toEqual(3696); // conforme os parâmetros esse é o correto
  });
});
