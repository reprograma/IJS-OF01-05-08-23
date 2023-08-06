const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calculo de horas totais de um projeto", ()=>{
  test("Dada as funcionalidades desejada do projeto, deve retornar a soma de horas necessarias totais", ()=>{
    //setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr"
    ]
    //acao
    const result = calcularHorasDeProjeto(funcionalidades)

    //verificacao
    expect(result).toEqual(72)
  })

  test("Caso o usuário insira uma funcionalidade que não está na lista", ()=>{
    //setup
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr",
      "funcionalidade_invalida"
    ]

    //acao e verificação
    try {
      calcularHorasDeProjeto(funcionalidades);
    } catch (error) {
      expect(error.message).toBe("Existe uma funcionalidade invalida");
    }
  })

  test("Caso a lista de funcionaliddes esteja vazia", ()=>{
    //setup
    const funcionalidades = []

    //acao e verificação
    try {
      calcularHorasDeProjeto(funcionalidades);
    } catch (error) {
      expect(error.message).toBe("A lista de funcionalidades está vazia");
    }
  })
})
