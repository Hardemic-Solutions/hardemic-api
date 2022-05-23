const chamadosModel = require('../models/chamadosModel')

module.exports = {
  async index(req, res) {
    const idEmpresa = req.params.idEmpresa;

    if (!idEmpresa) {
      res.status(400).send("Por favor informe a empresa")
    } else {
      chamadosModel.index(idEmpresa).then(resultado => {
        if (resultado.length > 0) {
          res.status(200).json(resultado);
        } else {
          res.status(204).send("Nenhum resultado encontrado!")
        }
      }).catch(erro => {
        console.log(erro);
        console.log("Houve um erro ao buscar as chamados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      })
    }


  },
  async show(req, res) {
    const idEmpresa = req.params.idEmpresa;
    const idChamado = req.params.idChamado;

    if (!idEmpresa) {
      res.status(400).send("Por favor informe a empresa")
    } else {
      chamadosModel.show(idEmpresa, idChamado).then(resultado => {
        if (resultado.length > 0) {
          res.status(200).json(resultado);
        } else {
          res.status(204).send("Nenhum resultado encontrado!")
        }
      }).catch(erro => {
        console.log(erro);
        console.log("Houve um erro ao buscar as chamados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      })
    }


  },
  async update(req, res) {
    const idChamado = req.params.idChamado;
    const status = req.body.status;

    if (!idChamado) {
      res.status(400).send("Por favor informe a empresa")
    } else if (!idChamado) {
      res.status(400).send("Por favor informe qual chamado deseja alterar")
    } else {
      chamadosModel.update(idChamado, status).then(resultado => {

        res.status(200).send('Chamado Alterado com sucesso');

      }).catch(erro => {
        console.log(erro);
        console.log("Houve um erro ao atualizar o chamado: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      })
    }
  }
}