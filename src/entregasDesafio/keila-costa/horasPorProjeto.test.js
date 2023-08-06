const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe ( "Calculo de horas totais do projeto" ,  ( )  =>  {
  test ( "Dando uma array com as funcionalidades desejadas do projeto, deve retornar a soma de horas necessárias totais" ,  ( )  =>  {
    const  funcionalidades  =  [ 
    "setup",  
    "responsividade",
    "construcao_1_pagina",
    "construcao_1_pagina",
    "construcao_1_pagina",
    "formulario",
    "ssr"
   ]

   //acao
   const result = calcularHorasDeProjeto(funcionalidades)

   //verificacao
    expect (result).toEqual(72);
  })
   test("Calcular horas quando não existe a funcionalidade", () => {
    const listaDeFuncionalidadeInexistente = ["testes"]
    expect(calcularHorasDeProjeto(listaDeFuncionalidadeInexistente)).toBeNaN()
  }) 
})