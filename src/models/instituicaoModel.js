const database = require("../database/config");

// function listarSala(req, res) {
//     instituicaoModel.listarSala()
//         .then(function (resultado) {
//             if (resultado.length > 0) {
//                 res.status(200).json(resultado);
//             } else {
//                 res.status(204).send("Nenhum resultado encontrado!")
//             }
//         }).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }
// function cadastrarSala(nomeSala) {
//     console.log("ACESSEI A INSTITUICAOMODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeSala);
//     var instrucao = `
//         INSERT INTO tb_sala (nome_sala) VALUES ('${nomeSala}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

// function deletarSala(idSala){
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idSala);
//     var instrucao = `
//         DELETE FROM tb_sala WHERE id_sala = ${idSala};
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// };



function listarComputadores(req, res) {
    instituicaoModel.listarComputadores()
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
function cadastrarComputador(hostname,patrimonio) {
    console.log("ACESSEI A INSTITUICAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", hostname,patrimonio);
    var instrucao = `
        INSERT INTO tb_computadores (hostname,patrimonio,fk_empresa,fk_sala)
         VALUES ('${hostname},${patrimonio},${6},${2}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterarComputador(id_computador, patrimonioNovo, hostnameNovo) {
    console.log("ACESSEI A INSTITUICAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterarSenha():",id_computador, patrimonioNovo, hostnameNovo);
    const instrucao = `
        UPDATE tb_computadores SET hostname = '${hostnameNovo}' WHERE id_computador = ${id_computador},
        UPDATE tb_computadores SET hostname = '${patrimonioNovo}' WHERE id_computador = ${id_computador};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    // cadastrarSala,
    // listarSala,
    // deletarSala,
    cadastrarComputador,
    listarComputadores,
    alterarComputador
};