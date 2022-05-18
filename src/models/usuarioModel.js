const database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    const instrucao = `
        SELECT * FROM tb_usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    const instrucao = `
        SELECT * FROM tb_usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha, empresa, permissao) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, empresa, permissao);
    const instrucao = `
        INSERT INTO tb_usuario (nome_usuario, email, senha, fk_empresa, permissao) VALUES ('${nome}', '${email}', '${senha}', '${6}','${'suporte'}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alterarSenha(idUsuario, senhaNova, senhaAntiga) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterarSenha():", idUsuario, senhaNova, senhaAntiga);
    const instrucao = `
        UPDATE tb_usuario SET senha = '${senhaNova}' WHERE Id_usuario = ${idUsuario} and senha = '${senhaAntiga}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idUsuario);
    const instrucao = `
        DELETE FROM tb_usuario WHERE Id_usuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function graficoCpu() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function graficoCpu(): ")
    var instrucao = `select 
	cpu,
	FORMAT(data_log,'dd/MM/yyyy hh:mm:ss'),
    fk_computador from  
    tb_logs
    where fk_computador = ${3}
    order by id_log
    desc OFFSET 0 ROWS
    FETCH NEXT 6 ROWS ONLY;`
    console.log("Executando a instrução (SELECT) SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoCpu() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function graficoCpu(): ")
    var instrucao = `select 
	cpu,
	FORMAT(data_log,'dd/MM/yyyy hh:mm:ss') as horario,
    fk_computador from  
    tb_logs
    where fk_computador = ${3}
    order by id_log
    desc OFFSET 0 ROWS
    FETCH NEXT 6 ROWS ONLY;`
    console.log("Executando a instrução (SELECT) SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoRam() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function graficoRam(): ")
    var instrucao = `
    SELECT ram FROM tb_logs  AS 'RAM'; `
    console.log("Executando a instrução (SELECT) SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoDisco() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function graficoDisco(): ")
    var instrucao = `
    SELECT disco FROM tb_logs  AS 'DISCO'; `
    console.log("Executando a instrução (SELECT) SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    entrar,
    cadastrar,
    listar,
    alterarSenha,
    deletar,
    graficoCpu,
    graficoRam,
    graficoDisco
};