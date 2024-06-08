const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');

const calcularHorasDeProjeto = (listaDeFuncionalidades) => {
  if (!listaDeFuncionalidades.length)
    return 0;
  else 
    return listaDeFuncionalidades
      .map(func => func in HORAS_POR_FUNCIONALIDADE ? HORAS_POR_FUNCIONALIDADE[func] : 0)
      .reduce((sum, currentValue) => sum + currentValue, 0);
};

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;