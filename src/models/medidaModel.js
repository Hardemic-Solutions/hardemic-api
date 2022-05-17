var database = require("../database/config");

function buscarUltimasMedidas(idCaixa, limite_linhas) {
    instrucaoSql = `select 
                        temperatura, 
                        umidade, 
                        momento
                    from medidas
                    where fk_aquario = ${idCaixa}
                    order by id desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idCaixa) {
    instrucaoSql = `select 
                        temperatura, 
                        umidade, DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medidas where fk_aquario = ${idCaixa} 
                    order by id desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}