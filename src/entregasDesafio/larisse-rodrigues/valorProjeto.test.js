const { calcularValorTotalProjeto } = require ('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require ('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')
describe ('Valor total do projeto', ()=>{
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico')
    })
    test('Retornar valor total de um projeto dado as funcionalidades e o valor da pessoa desenvoledora', ()=>{
       //setup
       const funcionalidades = [
        "setup",
        "responsividade",
        "construcao_1_pagina",
        "construcao_1_pagina",
        "construcao_1_pagina",
    ]
    const valoHora = 70

    //ação
    const result = calcularValorTotalProjeto(funcionalidades, valoHora)
   
    //verificação
    expect(result).toBe(3696)

    })

      test('Retornar valor total de um projeto sem funcionalidades', () => {
        // Setup
        const funcionalidades = [];
        const valorHora = 50; 
    
        // Ação
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);
    
        // Verificação
        expect(result).toBe(0);
      });
    });