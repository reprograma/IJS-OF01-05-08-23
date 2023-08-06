const { calcularHorasDeProjeto } =  require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("calculo de horas totais de um projeto", ()=> {
    test("dado uma array com as funcionalidades do projeto, deve retornar a soma de hortas necessarias totais ", ()=>{
    
            const funcionalidades = [
               "setup",
               "responsividade",
               "construcao_1_pagina",
               "construcao_1_pagina",
               "construcao_1_pagina",
               "ssr",
               "formulario"  
            ]

            const result = calcularHorasDeProjeto(funcionalidades)

            expect(result).toEqual(72)
    })

    test("Mostrar erro caso não seja dada nenhuma funcionalidade ", ()=>{
            const funcionalidades = [    
            ]
       
            const result = (Error)
       
            expect(result).toEqual(Error)
            console.log("Você precisa adicionar uma funcionalidade")
    })
    
})

