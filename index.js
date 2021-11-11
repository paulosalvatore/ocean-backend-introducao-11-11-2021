const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello, World!");
});

app.get("/oi", function (req, res) {
    res.send("Olá, mundo!");
});

const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];
//               0                   1                2

app.get("/herois", function (req, res) {
    res.send(herois);
});

app.listen(3000);
