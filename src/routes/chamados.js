const express = require("express");
const router = express.Router();

const chamadosController = require("../controllers/chamadosController");

router.get("/:idEmpresa/chamados", function (req, res) {
  chamadosController.index(req, res);
});

router.get("/:idEmpresa/chamados/:idChamado", function (req, res) {
  chamadosController.show(req, res);
});

router.put("/:idEmpresa/chamados/:idChamado", function (req, res) {
  chamadosController.update(req, res);
});

module.exports = router;