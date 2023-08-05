const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe("Calcular pacote correto para cada projeto", () => {
  test("Retorna pacote básico caso o número total de horas seja até 50", () => {

    // setup
    const totalDeHorasPorProjeto = 49;

    // ação
    const result = calcularPacote(totalDeHorasPorProjeto)

    // verificação
    expect(result).toEqual('pacote_basico')
  })

  test("Retorna pacote básico caso o número total de horas seja exatamente 50", () => {

    // setup
    const totalDeHorasPorProjeto = 50;

    // ação
    const result = calcularPacote(totalDeHorasPorProjeto)

    // verificação
    expect(result).toEqual('pacote_basico')
  })

  test("Retorna pacote intermediário caso o número total de horas seja entre 51 e 100", () => {

    // setup
    const totalDeHorasPorProjeto = 99;

    // ação
    const result = calcularPacote(totalDeHorasPorProjeto)

    // verificação
    expect(result).toEqual('pacote_intermediario')
  })

  test("Retorna pacote intermediário caso o número total de horas seja exatamente 100", () => {

    // setup
    const totalDeHorasPorProjeto = 100;

    // ação
    const result = calcularPacote(totalDeHorasPorProjeto)

    // verificação
    expect(result).toEqual('pacote_intermediario')
  })

  test("Retorna pacote premium caso o número total de horas seja 201", () => {

    // setup
    const totalDeHorasPorProjeto = 199;

    // ação
    const result = calcularPacote(totalDeHorasPorProjeto)

    // verificação
    expect(result).toEqual('pacote_premium')
  })

  test("Retorna pacote premium caso o número total de horas seja exatamente 200", () => {

    // setup
    const totalDeHorasPorProjeto = 200;

    // ação
    const result = calcularPacote(totalDeHorasPorProjeto)

    // verificação
    expect(result).toEqual('pacote_premium')
  })

  test("Retorna pacote premium caso o número total de horas seja apartir de 201", () => {

    // setup
    const totalDeHorasPorProjeto = 201;

    // ação
    const result = calcularPacote(totalDeHorasPorProjeto)

    // verificação
    expect(result).toEqual('pacote_premium')
  })
});