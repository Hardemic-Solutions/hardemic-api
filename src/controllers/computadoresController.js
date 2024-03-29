const computadoresModel = require('../models/computadoresModel')

function adicionarDevice(req, res) {
  const patrimonio = req.body.patrimonioServer;
  const hostname = req.body.hostnameServer;
  const sala = req.body.salaServer;
  const empresa = req.body.empresaServer;

  computadoresModel.adicionarDevice(patrimonio, hostname, sala, empresa)
    .then(
      function (resultado) {
        res.json(resultado);
      }
    ).catch(
      function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro do device! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      }
    );

}

function contarTodosDevices(req, res) {
  const idEmpresa = req.params.idEmpresa;
  computadoresModel.contarTodosDevices(idEmpresa).then(resultado => {
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

function reativarDevice(req, res) {
  const patrimonio = req.body.patrimonioDeviceServer;
  const hostname = req.body.hostnameDeviceServer;

  computadoresModel.reativarDevice(patrimonio, hostname)
    .then(
      function (resultado) {
        res.json(resultado)
      }
    ).catch(
      function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao reativar o device! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      }
    );
}

function alterarSala(req, res) {
  const idComputador = req.params.idComputador;
  const salaNova = req.body.salaServer;

  if (salaNova == null) {
    console.log("Sala está null");
  } else {

    computadoresModel.alterarSala(idComputador, salaNova)
      .then(
        function (resultado) {
          res.json(resultado)
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao atualizar! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );
  }
}

function deletarComputador(req, res) {
  const idComputador = req.params.id_computador;

  if (idComputador == undefined) {
    res.status(400).send("id do computador está undefined!");
  } else {
    computadoresModel.deletarComputador(idComputador)
      .then(
        function (resultado) {
          res.json({ message: "Computador deletado com sucesso" });
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao deletar Computador! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );
  }

}

async function listar(req, res) {
  const idComputador = req.params.idComputador;
  computadoresModel.listarInfo(idComputador).then(resultado => {
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

module.exports = {
  listar,
  adicionarDevice,
  contarTodosDevices,
  reativarDevice,
  alterarSala,
  deletarComputador
}