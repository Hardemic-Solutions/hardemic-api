require('dotenv').config()
const express = require('express');
const cors = require('cors');
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(
  "/files",
  express.static(path.resolve(__dirname, "tmp", "uploads"))
);

app.use(cors());

app.use(require('./src/routes'));

app.use((error, req, res, next) => {
    console.log('Erro não tratado', erro);
    res.sendStatus(500);
})

module.exports = app;

