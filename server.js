require("dotenv").config();
const express = require("express");
const compression = require('compression');
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

//console.log(process.env.API_KEY);
//const db = require("./models");

const app = express();
const PORT = process.env.PORT || 7500;

app.use(compression({ filter:shouldCompress} ));
app.use(morgan("common"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("client/build"));

app.listen(PORT, () => console.log("Successful Connection:  Visit http://localhost/ in you browser port: "  + PORT));

module.exports = app;