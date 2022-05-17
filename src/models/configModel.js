const database = require("../database/config");

module.exports = {
  index(fk_empresa) {
    console.log("ACESSEI O CONFIG MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    const instrucao = `
        SELECT 
        * from tb_configs
        WHERE fk_empresa = ${fk_empresa};
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  },
  update(fk_empresa, id_config, value = 0, situacao = 0) {
    console.log("ACESSEI O CONFIG MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    const instrucao = `
        UPDATE tb_configs
        SET valor = ${value}, situacao = ${situacao}
        WHERE fk_empresa = ${fk_empresa} and id_config = ${id_config};
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }
}
