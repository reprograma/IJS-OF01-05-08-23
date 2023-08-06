const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular pacote correto para  cada projeto",()=>{
  test("Retorna pacote básico caso o numero total de horas seja até 50h", ()=>{
    //setup
    const totalDeHorasPorProjeto = 49;

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto)

    //verificação
    expect(result).toEqual("pacote_basico")
  })

  test("Retorna pacote básico caso o numero total de horas seja exatamente 50h", ()=>{
    //setup
    const totalDeHorasPorProjeto = 50;

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto)

    //verificação
    expect(result).toEqual("pacote_basico")
  })

  test("Retorna pacote intermediário caso o numero total de horas seja entre 51h e 100h", ()=>{
    //setup
    const totalDeHorasPorProjeto = 99;

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto)

    //verificação
    expect(result).toEqual("pacote_intermediario")
  })

  test("Retorna pacote intermediário caso o numero total de horas seja exatamente 100h", ()=>{
    //setup
    const totalDeHorasPorProjeto = 100;

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto)

    //verificação
    expect(result).toEqual("pacote_intermediario")
  })

  test("Retorna pacote premium se o projeto tiver exatamente 200h", ()=>{
    //setup
    const totalDeHorasPorProjeto = 200;

    //acao
    const result = calcularPacote(totalDeHorasPorProjeto)

    //verificação
    expect(result)
  })

  test('Retorna erro se o projeto tiver mais que 200h', () => {
    //setup
    const totalDeHorasPorProjeto = 201;

    //acao
    const result = () => calcularPacote(totalDeHorasPorProjeto);

    //verificacao
    expect(result).toThrowError();
  });
})
