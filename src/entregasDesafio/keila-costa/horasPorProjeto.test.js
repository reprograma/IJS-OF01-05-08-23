const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe ( "Calculo de horas totais do projeto" ,  ( )  =>  {
  test ( "Dando uma array com as funcionalidades desejadas do projeto, deve retornar a soma de horas nrcessárias totais" ,  ( )  =>  {
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
   const resul = calculaHorasDeProjeto(funcionalidades)

   //verificacao
    expect (resul).toEqual(72);
  })
})