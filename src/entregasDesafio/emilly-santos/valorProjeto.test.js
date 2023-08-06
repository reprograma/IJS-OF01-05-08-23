const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")
const pacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("Valor total do projeto", ()=>{
  beforeEach(()=> {
    pacote.calcularPacote.mockReturnValue("pacote_basico")
  })
  test("Retornar valor total de um projeto dado as funcionalidades e o valor hora, para o pacote básico", () => {
    //setup
    const valorHora = 70
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ]

    //acao
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)

    //verificacao
    expect(result).toEqual(3696)
  })

  test("Retornar valor total de um projeto dado as funcionalidades e o valor hora sendo 0", () => {
    //setup
    const valorHora = 0
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ]

    //acao
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)

    //verificacao
    expect(result).toEqual(0)
  })

  test('Retornar valor total de um projeto dado as funcionalidades e o valor hora, para o pacote intermediario', () => {
    //setup
    pacote.calcularPacote.mockReturnValue('pacote_intermediario');
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ];

    const valorHora = 80;

    //ação
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    //verificação
    expect(result).toEqual(4301);
  });

  test('Retornar valor total de um projeto dado as funcionalidades e o valor hora, para o pacote premium', () => {
    //setup
    pacote.calcularPacote.mockReturnValue('pacote_premium');
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
    ];

    const valorHora = 80;

    //ação
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    //verificação
    expect(result).toEqual(4416);
  });
})
