require("dotenv").config();
const express = require("express");
const compression = require('compression');
// const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

//console.log(process.env.API_KEY);
//const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(compression());
// app.use(morgan("common"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("client/build"));

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));

// })

app.get("/api/team", (req,res) => {

    let team = [
        {id: 1, firstName: "Jeff", lastName: "Raimundo"},
        {id: 2, firstName: "Jon", lastName: "Jensen"},
        {id: 3, firstName: "Randy", lastName: "Jones"},
        {id: 4, firstName: "Roland", lastName: "Tellez"},
    ];
    res.json(team);
})

app.listen(PORT, () => console.log("Successful Connection:  Visit http://localhost/ in you browser port: "  + PORT));

module.exports = app;