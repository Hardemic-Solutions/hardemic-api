var database = require("../database/config");

function listar(fk_computador) {
  console.log("ACESSEI O ALERTA  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  var instrucao = `
  SELECT TOP 50
  tb_logs.id_log,
    tb_logs.ram,
    tb_logs.disco,
    tb_logs.cpu,
    tb_logs.gpu,
    tb_logs.rede,
    tb_logs.temperatura,
    tb_logs.data_log
    FROM tb_logs
    WHERE tb_logs.fk_computador = ${fk_computador}
    ORDER BY id_log DESC;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


module.exports = {
  listar,
}
