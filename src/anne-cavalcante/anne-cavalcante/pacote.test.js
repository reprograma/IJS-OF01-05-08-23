const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");
const {
  TAXAS_CONTRATUAIS_POR_PACOTE,
} = require("../../dominio/calculadora/constantes/constantes.js");

describe("Dado uma quantia de horas, deve retornar o tipo de pacote de acordo com o numero de horas", () => {
  test("Retorna pacote basico caso o numero seja entre 1 e 49", () => {
    //setup
    const totalDeHorasPorProjeto = 49;
    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);
    //verificacao
    expect(result).toEqual("pacote_basico");
  });

  test("Retorna o pacote basico caso o numero total de horas seja exatamente 50", () => {
    //setup
    const totalDeHorasPorProjeto = 49;
    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);
    //verificacao
    expect(result).toEqual("pacote_basico");
  });

  test("Retorna o pacote intermediário caso o numero de horas seja entre 51 e 100", () => {
    //setup
    const totalDeHorasPorProjeto = 51;
    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);
    //verificacao
    expect(result).toEqual("pacote_intermediario");
  });

  test("Retorna o pacote intermediario caso numero total de horas seja exatamente 100", () => {
    //setup
    const totalDeHorasPorProjeto = 100;
    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);
    //verificacao
    expect(result).toEqual("pacote_intermediario");
  });

  test("Retorna o pacote premium caso numero total de horas seja a partir de 101", () => {
    //setup
    const totalDeHorasPorProjeto = 102;
    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);
    //verificacao
    expect(result).toEqual("pacote_premium");
  });

  test("Retorna o pacote premium caso numero total de horas seja exatamente 200", () => {
    //setup
    const totalDeHorasPorProjeto = 200;
    //acao
    const result = calcularPacote(totalDeHorasPorProjeto);
    //verificacao
    expect(result).toEqual("pacote_premium");
  });
});

// Testes para validar se as taxas contratuais estao sendo atribuidas corretamente, de acordo com o tipo de pacote

describe("Dado uma quantidade de horas, ira identificar o tipo de pacote e ira retornar o valor da taxa contratual de acordo com o pacote", () => {
  test("Retorna 1.1 caso o pacote seja basico, conforme o numero de horas totais do projeto, ate 50 horas", () => {
    //setup
    const totalDeHorasPorProjeto = 50;
    //acao
    const tipo_pacote = calcularPacote(totalDeHorasPorProjeto);
    const result = TAXAS_CONTRATUAIS_POR_PACOTE[tipo_pacote];
    //verificacao
    expect(result).toEqual(1.1);
  });

  test("Retorna 1.12 caso o pacote seja intermediario, conforme o numero de horas totais do projeto de 51 a 100 horas", () => {
    //setup
    const totalDeHorasPorProjeto = 51;
    //acao
    const tipo_pacote = calcularPacote(totalDeHorasPorProjeto);
    const result = TAXAS_CONTRATUAIS_POR_PACOTE[tipo_pacote];
    //verificacao
    expect(result).toEqual(1.12);
  });

  test("Retorna 1.15 caso o pacote seja premium, conforme o numero de horas totais do projeto de 101 a 200 horas", () => {
    //setup
    const totalDeHorasPorProjeto = 101;
    //acao
    const tipo_pacote = calcularPacote(totalDeHorasPorProjeto);
    const result = TAXAS_CONTRATUAIS_POR_PACOTE[tipo_pacote];
    //verificacao
    expect(result).toEqual(1.15);
  });
});
