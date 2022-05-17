const express = require("express");
const router = express.Router();

const instituicaoController = require("../controllers/instituicaoController");
router.post("/cadastrarSala", function (req, res) {
    instituicaoController.cadastrarSala(req, res);
});
router.get("/listarSala", function (req, res) {
    instituicaoController.listarSala(req, res);
});
router.delete("/:id_sala", function (req, res){
    instituicaoController.deletarSala(req, res)
});
// Computador
router.post("/cadastrarComputador", function (req, res) {
    instituicaoController.cadastrarComputador(req, res);
});
router.get("/listarComputadores", function (req, res) {
    instituicaoController.listarComputadores(req, res);
});
router.delete("/:id_computador", function (req, res){
    instituicaoController.deletarComputador(req, res)
});


module.exports = router;