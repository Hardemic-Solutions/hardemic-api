const usuarioModel = require("../models/usuarioModel");

const sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    const idEmpresa = req.params.idempresa
    usuarioModel.listar(idEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var permissao = req.body.permissaoServer;
    var idEmpresa = req.body.empresaServer;

    usuarioModel.cadastrar(nome, email, senha, permissao, idEmpresa)
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

function alterarSenha(req, res) {
    const idUsuario = req.params.idUsuario
    const senhaNova = req.body.senhaNovaServer;
    const senhaAntiga = req.body.senhaAntigaServer;


    if (idUsuario == undefined) {
        res.status(400).send("id do usuario está undefined!");
    } else if (senhaNova == undefined) {
        res.status(400).send("Sua senha nova está undefined!");
    } else if (senhaAntiga == undefined) {
        res.status(400).send("Sua senha antiga está undefined!");
    } else {

        usuarioModel.alterarSenha(idUsuario, senhaNova, senhaAntiga)
            .then(
                function (resultado) {
                    res.json({ message: "Senha alterada com sucesso" });
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

function alterarDados(req, res) {
    const idUsuario = req.params.idUsuario;
    const nome = req.body.nomeServer;
    const senha = req.body.senhaServer;
    const permissao = req.body.permissaoServer;

    usuarioModel.alterarDados(idUsuario, nome, senha, permissao)
        .then(
            function (resultado) {
                res.json({ message: "Dados alterada com sucesso" });
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

function deletar(req, res) {
    const idUsuario = req.params.idUsuario

    if (idUsuario == undefined) {
        res.status(400).send("id do usuario está undefined!");
    } else {
        usuarioModel.deletar(idUsuario)
            .then(
                function (resultado) {
                    res.json({ message: "Usuário deletado com sucesso" });
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao deletar usuário! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    alterarSenha,
    alterarDados,
    deletar
}