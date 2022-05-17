var database = require("../database/config");

function listar(fk_empresa) {
  console.log("ACESSEI O ALERTA  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  var instrucao = `
      SELECT 
      tb_alerta.nome_alerta,
      tb_computadores.hostname,
      tb_salas.nome_sala,
      tb_logs.ram,
      tb_logs.disco,
      tb_logs.cpu,
      tb_logs.gpu,
      tb_logs.rede,
      tb_logs.temperatura,
      tb_logs.data_log,
      tb_empresa.nome_empresa
      FROM tb_alerta
      JOIN tb_logs ON tb_logs.id_log = tb_alerta.fk_log
      JOIN tb_computadores ON tb_computadores.id_computador = tb_logs.fk_computador
      JOIN tb_salas ON tb_salas.id_sala = tb_computadores.fk_sala
      JOIN tb_empresa ON tb_empresa.id_empresa = tb_computadores.fk_empresa
      WHERE tb_computadores.fk_empresa = ${fk_empresa};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


module.exports = {
  listar,
}
