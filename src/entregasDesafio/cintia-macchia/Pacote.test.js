const { calcularPacote } =  require("../../dominio/calculadora/Projeto/pacote")


describe("calcular pacote correto para cada protejo", ()=> {
    test("retorna pacote básico caso o numero seja até 50h", ()=>{
         const totalDeHorasPorProjeto = (49);
           
         const result = calcularPacote(totalDeHorasPorProjeto)

         expect(result).toEqual("pacote_basico")

    })

    test("retorna erro caso seja digitado valor igual a 0", ()=>{
        const totalDeHorasPorProjeto = (0);
          
        const result = (Error)

        expect(result).toEqual(Error)
        console.log("voc~e precisa digitar uma quantidade de horas válidas")

    })

   test("retorna erro caso o valor digitado não seja numérico", ()=>{
    const totalDeHorasPorProjeto = !Number;
      
    const result = (Error)

    expect(result).toEqual(Error)
    console.log("você precisa digitar um valor numérico")

    })

    test("retorna pacote básico caso o numero seja igual 50h", ()=>{
        
         const totalDeHorasPorProjeto = (50);
           
         const result = calcularPacote(totalDeHorasPorProjeto)

         expect(result).toEqual("pacote_basico")
    })

    test("retorna pacote intermediario caso o numero 51h", ()=>{
         const totalDeHorasPorProjeto = (51);
           
         const result = calcularPacote(totalDeHorasPorProjeto)

         expect(result).toEqual("pacote_intermediario")
    })

    test("retorna pacote intermediario caso o numero seja até 100h", ()=>{
         const totalDeHorasPorProjeto = (100);
           
         const result = calcularPacote(totalDeHorasPorProjeto)

         expect(result).toEqual("pacote_intermediario")
    })

    test("retorna pacote premium caso o numero seja até 200h", ()=>{
        const totalDeHorasPorProjeto = (200);
               
        const result = calcularPacote(totalDeHorasPorProjeto)
    
        expect(result).toEqual("pacote_premium")
    
    })

    test("retorna pacote premium caso o numero seja 199h", ()=>{
        const totalDeHorasPorProjeto = (199);
               
        const result = calcularPacote(totalDeHorasPorProjeto)
    
        expect(result).toEqual("pacote_premium")
    
    })

    test("retorna erro caso o numero seja maior que 201h", ()=>{
            const totalDeHorasPorProjeto = (201);
        
            const result = (Error)
        
            expect(result).toEqual(Error)
            console.log("valor maximo de horas e 200")  
    })
})

