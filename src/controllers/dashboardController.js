const dashboardModel = require("../models/dashboardModel");


function graficoCpu(req, res) {
    const fk_computador = req.params.fk_computador;

    dashboardModel.graficoCpu(fk_computador)
        .then(


            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado) {
                    console.log(resultado);
                    res.json(resultado);
                } else {
                    res.send("sem resultado")
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );


}
function graficoRam(req, res) {
    const fk_computador = req.params.fk_computador;

    dashboardModel.graficoRam(fk_computador)
        .then(


            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado) {
                    console.log(resultado);
                    res.json(resultado);
                } else {
                    res.send("sem resultado")
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );




}
function graficoDisco(req, res) {

    const fk_computador = req.params.fk_computador;
    dashboardModel.graficoDisco(fk_computador)
        .then(


            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado) {
                    console.log(resultado);
                    res.json(resultado);
                } else {
                    res.send("sem resultado")
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );


}

// select para pegar quantidade de computadores
function listDevices(req, res) {
    const fk_empresa = req.params.idempresa;

    dashboardModel.listDevices(fk_empresa)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);

                if (resultado) {
                    console.log(resultado);
                    res.json(resultado);
                } else {
                    res.send("sem resultado")
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    graficoCpu,
    graficoRam,
    graficoDisco,
    listDevices
}