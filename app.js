require('dotenv').config()
const express = require('express');
const cors = require('cors');
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  "/files",
  express.static(path.resolve(__dirname, "tmp", "uploads"))
);

app.use(cors());

app.use(require('./src/routes'));

module.exports = app;

