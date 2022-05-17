const express = require("express");
const router = express.Router();

const configController = require("../controllers/configController");

router.get("/:idEmpresa/config", function (req, res) {
  configController.index(req, res);
});

router.put("/:idEmpresa/config/:idConfig", function (req, res) {
  configController.update(req, res);
});

module.exports = router;