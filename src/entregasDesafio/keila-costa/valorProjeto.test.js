const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote")
jest.mock("../../dominio/calculadora/Projeto/pacote.js")

describe("Valor total do projeto", ()=> {
    beforeEach(() =>{
        pacote.calcularPacote.mockReturnValue("pacote_basico")
    })
    test("Retornar valor total de um projeto dado as funcionalidades e o valor horan da pessoa desenvolvedora", ()=> {
        //setup
         const  funcionalidades  =  [ 
            "setup",  
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
        ]

        const valorHora = 70;
        //acao
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        //verficacao
        expect(result).toEqual(3696)
    })
    
});

//3 testes das taxas contratuais - passar o array de funcionalidades e o valor da hora 

describe('Calcular o valor total do projeto', () => {
    const valorHora = 8;
    test('um projeto com o total de 104h deve receber uma taxa de 15% referente ao pacote_premium', () =>{
    const listaDeFuncionalidades = [
        "setup",
        "formulario",
        "responsividade",
        "otimizacao_seo",
        "construcao_1_pagina",
        "integracao_mailchimp",
        "ssr",
        "integracao_api_propria"
    ]

    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(915)
    });

    test('um projeto com o total de 72h deve receber a taxa de 12% referente ao pacote_intermediario', () =>{
      const listaDeFuncionalidades = [
        "setup",
        "otimizacao_seo",
        "construcao_1_pagina",
        "integracao_mailchimp",
        "ssr",
        "integracao_api_propria"
    ];

      expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(634)
    });

    test('um projeto com o total de 24h deve receber a taxa de 10% referente ao pacote_basico', () =>{
      const listaDeFuncionalidades = ['setup', 'construcao_1_pagina', 'ssr'];

      expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(211)
    });
  });