var database = require("../database/config");

function listarInfo(fk_computador) {
  console.log("ACESSEI O COMPUTADOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  var instrucao = `
  select TOP 1
  * 
  from tb_hard_computadores
  join tb_computadores on tb_computadores.id_computador = tb_hard_computadores.fk_computador
  join tb_salas on tb_computadores.fk_sala = tb_salas.id_sala 
  where tb_hard_computadores.fk_computador = ${fk_computador}
  ORDER BY id_hard DESC;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function adicionarDevice(patrimonio, hostname, sala, empresa) {
  console.log("ACESSEI O COMPUTADOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  var instrucao = `
    INSERT INTO tb_computadores (patrimonio,hostname,fk_sala,fk_empresa, deletado)
    VALUES ('${patrimonio}','${hostname}',${sala},${empresa}, 0);
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function contarTodosDevices(idEmpresa) {
  console.log("ACESSEI O COMPUTADOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  var instrucao = `
    select * from tb_computadores as tb_c
    inner join tb_empresa as tb_e on tb_c.fk_empresa = tb_e.id_empresa
    where id_empresa = ${idEmpresa};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function deletarComputador(idComputador) {
  console.log("ACESSEI O COMPUTADOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idComputador);
  var instrucao = `
      UPDATE tb_computadores SET deletado = 1 
      WHERE id_computador = ${idComputador};
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function reativarDevice(patrimonio, hostname) {
  console.log("ACESSEI O COMPUTADOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  var instrucao = `
    UPDATE tb_computadores
    SET deletado = 0
    WHERE patrimonio = '${patrimonio}' AND hostname = '${hostname}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function alterarSala(idComputador, salaNova) {
  console.log("ACESSEI O COMPUTADOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  var instrucao = `
      update tb_computadores 
      set fk_sala = ${salaNova}
      where id_computador = ${idComputador};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listarInfo,
  adicionarDevice,
  contarTodosDevices,
  reativarDevice,
  alterarSala,
  deletarComputador,
}
