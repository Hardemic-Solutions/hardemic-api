const database = require("../database/config");

module.exports = {
  index(fk_empresa) {
    console.log("ACESSEI O CHAMADOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    const instrucao = `
      SELECT
      tb_computadores.id_computador,
      tb_computadores.fk_sala,
      tb_chamado.id_chamado,
      tb_computadores.hostname,
      tb_chamado.descricao,
      tb_chamado.status
        from tb_chamado 
      JOIN tb_computadores ON tb_computadores.id_computador = tb_chamado.fk_computador
      WHERE tb_computadores.fk_empresa = ${fk_empresa} AND tb_computadores.deletado = 0;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  },
  show(fk_empresa, id_chamado) {
    console.log("ACESSEI O CHAMADOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    const instrucao = `
      SELECT 
      tb_chamado.id_chamado,
      tb_computadores.hostname,
      tb_chamado.descricao,
        tb_chamado.status,
        tb_alerta.nome_alerta,
        tb_alerta.data_alerta 
        from tb_chamado 
      JOIN tb_alerta ON tb_alerta.fk_chamado =tb_chamado.id_chamado
      JOIN tb_computadores ON tb_computadores.id_computador = tb_chamado.fk_computador
      WHERE tb_computadores.fk_empresa = ${fk_empresa} AND id_chamado = ${id_chamado};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  },
  update(id_chamado, status) {
    console.log("ACESSEI O CHAMADOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    const instrucao = `
      UPDATE tb_chamado 
      SET tb_chamado.status = '${status}' 
      WHERE id_chamado = ${id_chamado}
      ;
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }
}
