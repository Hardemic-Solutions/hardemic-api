const configModel = require('../models/configModel')

module.exports = {
  async index(req, res) {
    const idEmpresa = req.params.idEmpresa;

    if (!idEmpresa) {
      res.status(400).send("Por favor informe a empresa")
    } else {
      configModel.index(idEmpresa).then(resultado => {
        if (resultado.length > 0) {
          res.status(200).json(resultado);
        } else {
          res.status(204).send("Nenhum resultado encontrado!")
        }
      }).catch(erro => {
        console.log(erro);
        console.log("Houve um erro ao buscar as configurações: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      })
    }


  },
  async update(req, res) {
    const idEmpresa = req.params.idEmpresa;
    const idConfig = req.params.idConfig;
    const valor = req.body.valor;
    const situacao = req.body.situacao;

    if (!idEmpresa) {
      res.status(400).send("Por favor informe a empresa")
    } else if (!idConfig) {
      res.status(400).send("Por favor informe qual configuração deseja alterar")
    } else {
      configModel.update(idEmpresa, idConfig, valor, situacao).then(resultado => {

        res.status(200).send('Configuração Alterada com sucesso');

      }).catch(erro => {
        console.log(erro);
        console.log("Houve um erro ao atualizar as configurações: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      })
    }
  }
}