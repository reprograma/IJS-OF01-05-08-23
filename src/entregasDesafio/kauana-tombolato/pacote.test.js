const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote")

describe("Calcular pacote correto para cada projeto", ()=> {
    test("Retorne um pacote básico caso o número total de horas seja até 50h", ()=> {
        //setup
        const totalDeHorasPorProjeto = 49;
        //ação
        const result = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(result).toEqual("pacote_basico")
    });

    test("Retorna o pacote básico caso o número total de horas seja exatamente 50h", ()=> {
        //setup
        const totalDeHorasPorProjeto = 50;
        //ação 
        const result = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(result).toEqual("pacote_basico")
    })

    test("Retorna o pacote intermediario caso o número total de horas seja entre 51 e 100", ()=> {
        //setup
        const totalDeHorasPorProjeto = 70;
        //ação 
        const result = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(result).toEqual("pacote_intermediario")
    })

    test("Retorna o pacote intermediario caso o número total de horas seja exatamente 100h", ()=> {
        //setup
        const totalDeHorasPorProjeto = 100;
        //ação 
        const result = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(result).toEqual("pacote_intermediario")
    })

    test("Retorna o pacote premium caso o número total de horas seja entre 101 e 200", ()=> {
        //setup
        const totalDeHorasPorProjeto = 200;
        //ação 
        const result = calcularPacote(totalDeHorasPorProjeto)
        //verificação
        expect(result).toEqual("pacote_premium")
    })

    test("Deve retornar uma String quando número de horas for muito alto", () => {
        //setup
        const totalDeHorasPorProjeto = 300;
        //ação
        const result = calcularPacote(totalDeHorasPorProjeto);
        //verificação
        expect(result).toEqual("pacote não encontrado");
    });
})