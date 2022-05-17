const express = require("express");
const router = express.Router();

const alertaController = require("../controllers/alertaController");

router.get("/:idEmpresa/alertas", function (req, res) {
  alertaController.listar(req, res);
});

module.exports = router;