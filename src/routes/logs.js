const express = require("express");
const router = express.Router();

const logsController = require("../controllers/logsController");

router.get("/logs/:idComputador", function (req, res) {
  logsController.listar(req, res);
});

module.exports = router;