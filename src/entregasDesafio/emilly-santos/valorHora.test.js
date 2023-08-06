const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe("Calcular valor por hora", ()=>{
  test("Deve retornar o valor arredondado correto dado um valor recebido no mês", ()=>{
    //setup
    const valorPorMês = 5000;

    //acao
    const result = calcularValorPorHora(valorPorMês)

    //verificacao
    expect(result).toEqual(29)
  })

  test("Deve retornar 0 se o valorPorMês for 0", ()=>{
    //setup
    const valorPorMês = 0;

    //acao
    const result = calcularValorPorHora(valorPorMês)

    //verificacao
    expect(result).toEqual(0)
  })
})
