const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES
} = require('../constantes/constantes')

const calcularValorPorHora = (rendaMensal) => {
  if (rendaMensal <= 0) {
    return 0;
  }

  const horasTrabalhadasPorMes = (HORAS_POR_DIA * DIAS_UTEIS_NO_MES); //176h
  const valorPorHora = rendaMensal / horasTrabalhadasPorMes; //28.40

  return Math.ceil(valorPorHora);
};

exports.calcularValorPorHora = calcularValorPorHora;