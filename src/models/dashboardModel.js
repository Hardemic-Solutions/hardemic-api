const database = require("../database/config");

function graficoCpu(fk_computador) {
    console.log("ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function graficoCpu(): ")
    var instrucao = `select 
	cpu,
	FORMAT(data_log,'dd/MM/yyyy hh:mm:ss') as horario,
    fk_computador from  
    tb_logs
    where fk_computador = ${fk_computador}
    order by id_log
    desc OFFSET 0 ROWS
    FETCH NEXT 6 ROWS ONLY;`
    console.log("Executando a instrução (SELECT) SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoRam(fk_computador) {
    console.log("ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function graficoRam(): ")
    var instrucao = 
    `select 
	tb_logs.ram as ramDisponivel,computador.ram,
	FORMAT(data_log,'dd/MM/yyyy hh:mm:ss') as horario,
    tb_logs.fk_computador from  
    tb_logs join tb_hard_computadores as computador on computador.fk_computador = tb_logs.fk_computador
    where tb_logs.fk_computador = ${fk_computador}
    order by id_log
    desc OFFSET 0 ROWS
    FETCH NEXT 6 ROWS ONLY;`
    console.log("Executando a instrução (SELECT) SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoDisco(fk_computador) {
    console.log("ACESSEI O DASHBOARD MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function graficoDisco(): ")
    var instrucao =    `select 
	tb_logs.disco as discoDisponivel,computador.armazenamento,
	FORMAT(data_log,'dd/MM/yyyy hh:mm:ss') as horario,
    tb_logs.fk_computador from  
    tb_logs join tb_hard_computadores as computador on computador.fk_computador = tb_logs.fk_computador
    where tb_logs.fk_computador = ${fk_computador}
    order by id_log
    desc OFFSET 0 ROWS
    FETCH NEXT 6 ROWS ONLY;`
    console.log("Executando a instrução (SELECT) SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listDevices(fk_empresa) {
    var instrucao =    `select * from tb_computadores where fk_empresa = ${fk_empresa};`
    console.log("Executando a instrução (SELECT) SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    graficoCpu,
    graficoRam,
    graficoDisco,
    listDevices,
};