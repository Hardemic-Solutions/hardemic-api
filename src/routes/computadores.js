var express = require("express");
var router = express.Router();

var computadoresController = require("../controllers/computadoresController");

router.get("/computadores/info/:idComputador", function (req, res) {
  computadoresController.listar(req, res);
});

router.get("/computadores/:idEmpresa", function (req, res) {
  computadoresController.contarTodosDevices(req, res);
});

router.put("/computador/alterarsala/:idComputador", function (req, res) {
  computadoresController.alterarSala(req, res)
})

router.delete("/computador/:id_computador", function (req, res){
  computadoresController.deletarComputador(req, res)
});

module.exports = router;