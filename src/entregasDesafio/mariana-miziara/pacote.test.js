const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular pacote correto para cada projeto", () => {
    test("Retorna pacote básico se o projeto tiver até 50h", () => {
        //setup
        const totalDeHorasPorProjeto = 49;
        
        //ação
        const result = calcularPacote(totalDeHorasPorProjeto);

        //verificação
        expect(result).toEqual("pacote_basico");

    });

    test("Retorna pacote básico se o projeto tiver exatamente 50h", () => {
        //setup
        const totalDeHorasPorProjeto = 50;
        
        //ação
        const result = calcularPacote(totalDeHorasPorProjeto);

        //verificação
        expect(result).toEqual("pacote_basico");

    })

    test("Retorna pacote intermediário se o projeto tiver entre 51h e 100h", () => {
        //setup
        const totalDeHorasPorProjeto = 51;
        
        //ação
        const result = calcularPacote(totalDeHorasPorProjeto);

        //verificação
        expect(result).toEqual("pacote_intermediario");

    })

    test("Retorna pacote intermediário se o projeto tiver exatamente 100h", () => {
        //setup
        const totalDeHorasPorProjeto = 100;
        
        //ação
        const result = calcularPacote(totalDeHorasPorProjeto);

        //verificação
        expect(result).toEqual("pacote_intermediario");

    })

    test("Retorna pacote premium se o projeto tiver entre 101h e 200h", () => {
        //setup
        const totalDeHorasPorProjeto = 101;
        
        //ação
        const result = calcularPacote(totalDeHorasPorProjeto);

        //verificação
        expect(result).toEqual("pacote_premium");

    })

    test("Retorna pacote premium se o projeto tiver exatamente 200h", () => {
        //setup
        const totalDeHorasPorProjeto = 200;
        
        //ação
        const result = calcularPacote(totalDeHorasPorProjeto);

        //verificação
        expect(result).toEqual("pacote_premium");

    })

    test("Retorna TypeError se o projeto tiver acima de 200h", () => {
        //setup
        const totalDeHorasPorProjeto = 201;

        //ação e verificação
        expect(() => {
            calcularPacote(totalDeHorasPorProjeto)
        }).toThrow(TypeError);

    })

});