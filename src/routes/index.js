const express = require("express");
const router = express.Router();


router.get("/", function (req, res) {
    res.render("index", { title: "Express" });
});


router.get("/", async (req, res) => res.send("Hello World!"));
router.use("/usuarios", require("./usuarios"));
router.use("/instituicao", require("./instituicao"));
router.use("/empresa", require("./rotinas"));
router.use("/empresa", require("./alertas"));
router.use("/empresa", require('./configs'));

module.exports = router;