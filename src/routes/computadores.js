var express = require("express");
var router = express.Router();

var computadoresController = require("../controllers/computadoresController");

router.get("/computadores/:idComputador", function (req, res) {
  computadoresController.listar(req, res);
});

module.exports = router;