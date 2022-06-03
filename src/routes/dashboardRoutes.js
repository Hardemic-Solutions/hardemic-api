const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController");

router.get("/dadosgraph1", function (req, res) {
    dashboardController.graficoCpu(req, res);
});
router.get("/dadosgraph2", function (req, res) {
    dashboardController.graficoRam(req, res);
});
router.get("/dadosgraph3", function (req, res) {
    dashboardController.graficoDisco(req, res);
});

// select pegar quantidade de computadores
router.get("/devices/:idempresa", function (req, res) {
    dashboardController.listDevices(req, res);
});


module.exports = router;