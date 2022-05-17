const alertaModel = require('../models/alertaModel')

module.exports = {
  async listar(req, res) {
    const idEmpresa = req.params.idEmpresa;
    alertaModel.listar(idEmpresa).then(resultado => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!")
      }
    }).catch(erro => {
      console.log(erro);
      console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    })
  }
}