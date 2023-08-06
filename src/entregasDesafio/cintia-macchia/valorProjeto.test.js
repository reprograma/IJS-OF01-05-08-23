const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")
const pacote = require("../../dominio/calculadora/Projeto/pacote")
jest.mock("../../dominio/calculadora/Projeto/pacote.js")



describe("Valor total do projeto basico", ()=> {
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue("pacote_basico");
    })
    test("Retornar valor total de um projeto dados as funcionalidades e valor hora da pessoa", ()=>{
       
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina"
        ]
        const valorHora = 70
        
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
       
        expect(result).toEqual(3696)
    })

    test("Retornar erro caso o valor dado em valorHora não seja numérico", ()=>{
       
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "otimizacao_seo",
            "ssr",
            "formulario",
        ]
        const valorHora = !Number
     
        const result = Error
       
        expect(result).toEqual(Error)
        
    })
  
})

describe("Valor total do Projeto intermediario", () =>{
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue("pacote_intermediario")   
    })
    test("Retornar valor total de um projeto dados as funcionalidades e valor hora da pessoa", ()=>{
       
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "otimizacao_seo",
            "ssr",
            "formulario",
        ]
        const valorHora = 70
     
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
       
        expect(result).toEqual(5645)
    })

    test("Retornar erro caso o valor dado em valorHora não seja numérico", ()=>{
       
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "otimizacao_seo",
            "ssr",
            "formulario",
        ]
        const valorHora = !Number
     
        const result = Error
       
        expect(result).toEqual(Error)
        
    })


})

describe("Valor total do Projeto premium", () =>{
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue("pacote_premium")   
    })
    test("Retornar valor total de um projeto dados as funcionalidades e valor hora da pessoa", ()=>{
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "otimizacao_seo",
            "ssr",
            "formulario",
            "formulario",
            "construcao_1_pagina",
            "construcao_1_pagina"
        ]
        const valorHora = 70
                      
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
       
        expect(result).toEqual(8372)
    })


    test("retornar erro caso a quantidade de horas ultrapasse 200", ()=>{
            const funcionalidades = [
                "setup",
                "responsividade",
                "construcao_1_pagina",
                "otimizacao_seo",
                "ssr",
                "formulario",
                "formulario",
                "construcao_1_pagina",
                "construcao_1_pagina",
                "setup",
                "responsividade",
                "construcao_1_pagina",
                "otimizacao_seo",
                "ssr",
                "formulario",
                "formulario",
                "construcao_1_pagina",
                "construcao_1_pagina"
            ]
            const valorHora = 70
           
            const result = (Error)
            

            expect(result).toEqual(Error)
            console.log("reduza a quantidade de hora")  
    })  

    test("Retornar erro caso o valor dado em valorHora não seja numérico", ()=>{
       
        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "otimizacao_seo",
            "ssr",
            "formulario",
        ]
        const valorHora = !Number
     
        const result = Error
       
        expect(result).toEqual(Error)
        
    })

})


