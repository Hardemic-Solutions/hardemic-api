const instituicaoModel = require("../models/instituicaoModel");


function listarSala() {
    console.log("ACESSEI A INSTITUICAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM tb_sala;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrarSala(req, res) {
    var nomeSala = req.body.nomeSalaServer;


    if (nomeSala == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }  else {
        
        instituicaoModel.cadastrarSala(nomeSala)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function deletarSala(req, res){
    const idSala = req.params.idSala

    
    if (idSala == undefined) {
        res.status(400).send("id da sala está undefined!");
    }else{
        instituicaoModel.deletarSala(idSala)
        .then(
            function (resultado) {
                res.json({ message: "Sala deletada com sucesso" });
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao deletar Sala! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

}

function listarComputadores() {
    console.log("ACESSEI  A INSTITUICAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM tb_computadores;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrarComputador(req, res) {
    var patrimonio = req.body.patrimonioServer;
    var hostname = req.body.hostnameServer;

    if (nomeSala == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }  else {
        
        instituicaoModel.cadastrarSala(nomeSala)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function deletarComputador(req, res){
    const idComputador = req.params.idComputador;

    
    if (idComputador == undefined) {
        res.status(400).send("id do computador está undefined!");
    }else{
        instituicaoModel.deletarSala(idSala)
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

module.exports = {
    cadastrarSala,
    listarSala,
    deletarSala,
    cadastrarComputador,
    listarComputadores,
    deletarComputador
}