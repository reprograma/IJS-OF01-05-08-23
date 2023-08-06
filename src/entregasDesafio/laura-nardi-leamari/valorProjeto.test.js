const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")
const pacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("Valor total do Projeto", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico")
  })

  test("retornar valor total de um projeto dado as funcionalidades e o valor hora da pessoa", () => {
    // setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ]

    const valorHora = 70

    // ação
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)

    // verificação
    expect(result).toEqual(3696)

  })
})