const express = require("express");
const multerConfig = require("../config/multerConfig");
const router = express.Router();
const multer = require("multer");

const rotinaController = require("../controllers/rotinaController");

router.get("/:idEmpresa/rotinas", function (req, res) {
  rotinaController.index(req, res);
});

router.get("/:idEmpresa/rotinas/:idRotina", function (req, res) {
  rotinaController.show(req, res);
});

router.post("/:idEmpresa/rotinas", multer(multerConfig).single("rotina"), function (req, res) {
  rotinaController.store(req, res);
});

router.put("/:idEmpresa/rotinas/:idRotina", multer(multerConfig).single("rotina"), function (req, res) {
  rotinaController.update(req, res);
});

router.delete("/:idEmpresa/rotinas/:idRotina", function (req, res) {
  rotinaController.delete(req, res);
});

module.exports = router;