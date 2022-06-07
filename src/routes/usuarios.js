var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar/:idempresa", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.put("/alterarsenha/:idUsuario", function (req, res) {
    usuarioController.alterarSenha(req, res)
})

router.put("/alterardados/:idUsuario", function (req, res) {
    usuarioController.alterarDados(req, res)
})

router.delete("/:idUsuario", function (req, res) {
    usuarioController.deletar(req, res)
})

module.exports = router;