const database = require("../database/config");

module.exports = {
  async index(fk_empresa) {
    console.log("ACESSEI O ROTINA  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function index()");
    var instrucao = `
        SELECT 
        * FROM tb_rotinas
        WHERE fk_empresa = ${fk_empresa};
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  },
  async store(nome_rotina, caminho_rotina, fk_empresa, descricao = 'sem descrição', nome_arquivo) {
    console.log("ACESSEI O ROTINA  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function store()");
    var instrucao = `
        INSERT INTO tb_rotinas(nome_rotina, caminho_rotina, fk_empresa, descricao,nome_arquivo) 
        VALUES ('${nome_rotina}','${caminho_rotina}',${fk_empresa},'${descricao}','${nome_arquivo}');
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  },
  async show(idEmpresa, idRotina) {
    console.log("ACESSEI O ROTINA  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function show()");
    var instrucao = `
        SELECT 
        * FROM tb_rotinas
        WHERE fk_empresa = ${idEmpresa} and id_rotina = ${idRotina};
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  },

  async update(nome_rotina, caminho_rotina, fk_empresa, descricao = 'sem descrição', nome_arquivo, idRotina) {
    console.log("ACESSEI O ROTINA  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function update()");
    var instrucao = `
        UPDATE tb_rotinas
        SET nome_rotina = '${nome_rotina}', caminho_rotina = '${caminho_rotina}', descricao = '${descricao}', nome_arquivo='${nome_arquivo}' WHERE fk_empresa =  ${fk_empresa} and id_rotina = ${idRotina}
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  },
  async delete(idEmpresa, idRotina) {
    console.log("ACESSEI O ROTINA  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function delete()");
    var instrucao = `
        DELETE FROM tb_rotinas 
        WHERE fk_empresa =  ${idEmpresa} and id_rotina = ${idRotina}
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }
}