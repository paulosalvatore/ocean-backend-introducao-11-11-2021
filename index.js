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

// [GET] "/herois" - Read All (Ler tudo)
app.get("/herois", function (req, res) {
    res.send(herois);
});

// [GET] "/herois/:id" - Read Single By Id (Ler individualmente - pelo Id)
app.get("/herois/:id", function (req, res) {
    // Lógica de obtenção do ID
    const id = +req.params.id - 1;

    // console.log(id, typeof id);

    // Lógica de acesso ao dados
    const item = herois[id];

    // Lógica de envio desse dado encontrado
    res.send(item);
});

app.listen(3000);
