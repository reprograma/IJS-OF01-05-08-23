const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const totalDeHoras = require("../../dominio/calculadora/Projeto/horasPorProjeto")
const pacote = require("../../dominio/calculadora/Projeto/pacote");

//Professora, eu corri os testes sem mockar o retorno dos pacotes e todos passaram da mesma forma, mas como essa parte foi feita em sala de aula, deixei como já estava.
jest.mock("../../dominio/calculadora/Projeto/pacote.js");

const valorHora = 70;

describe("Valor total do projeto", () => {
 
    test("Retorna o valor total do projeto dadas as funcionalidades sendo equivalentes a um pacote básico e o valor-hora da pessoa desenvolvedora", () => {
        //setup
        pacote.calcularPacote.mockReturnValue("pacote_basico");

        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina"
        ];

        //ação
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);        

        //verificação
        expect(result).toEqual(3696);
    });

    test("Retorna o valor total do projeto dadas as funcionalidades sendo equivalentes a um pacote intermediário e o valor-hora da pessoa desenvolvedora", () => {
        //setup
        pacote.calcularPacote.mockReturnValue("pacote_intermediario");

        const funcionalidades = [
            "setup",
            "responsividade",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "integracao_mailchimp"
        ];

        //ação
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);        

        //verificação
        expect(result).toEqual(5018);
    });

    test("Retorna o valor total do projeto dadas as funcionalidades sendo equivalentes a um pacote premium e o valor-hora da pessoa desenvolvedora", () => {
        //setup
        pacote.calcularPacote.mockReturnValue("pacote_premium");

        const funcionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "integracao_api_propria"
        ];

        //ação
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);        

        //verificação
        expect(result).toEqual(9016);
    });

    test("Retorna NaN quando é passada uma funcionalidade que não existe na lista previamente estabelecidade", () => {
        //setup
        pacote.calcularPacote.mockReturnValue("pacote_premium");

        const funcionalidades = [
            "set_up",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "integracao_api_propria"
        ];

        //ação
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);        

        //verificação
        expect(result).toEqual(NaN);
    });

    test("Retorna ReferenceError se não for passada a lista de funcionalidades ou o valor da hora", () => {
        
        //ação e verificação (o setup foi deixado de lado de propósito para o teste)
        expect(() => {
            calcularValorTotalProjeto(funcionalidades, valorHora)
        }).toThrow(ReferenceError);
    });

});