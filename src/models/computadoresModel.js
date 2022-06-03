var database = require("../database/config");

function listarInfo(fk_computador) {
  console.log("ACESSEI O COMPUTADOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  var instrucao = `
      select TOP 1
      * 
      from tb_hard_computadores 
      where tb_hard_computadores.fk_computador = ${fk_computador}
      ORDER BY id_hard DESC;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


module.exports = {
  listarInfo,
}
