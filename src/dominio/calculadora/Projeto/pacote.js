const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => {
  const pacote = Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto);
  return pacote ? pacote[0] : "pacote não encontrado";
}

exports.calcularPacote = calcularPacote;
