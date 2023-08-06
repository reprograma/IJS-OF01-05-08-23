const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe("valor por hora", ()=> {
    test("retornar o valor arredondado correto dado um valor recebido no mês", ()=>{
        
            const valorPorMes = 5000;
        
            const result = calcularValorPorHora(valorPorMes)

            expect(result).toEqual(29)
    })

    test("retornar erro caso não seja dado nenhum valor", () =>{
      
        const valorPorMes = 0;

       const result = (Error)

       expect(result).toEqual(Error)
       console.log("você precisa digitar um valor válido")
    } )

    test("retornar erro caso valor dado não seja numérico", () =>{
        const valorPorMes = !Number;
 
        const result = (Error)
 
        expect(result).toEqual(Error)
        console.log("você precisa digitar um valor numérico")
    })

})