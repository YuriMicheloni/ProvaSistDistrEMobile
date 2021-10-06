const express = require('express');
const app = express();

app.use(express.json());

cId = 2;
const cliente = [{
    cId: "0",
    cNome: "Brenda",
    cEndereço: "Rua Teste, 10",
    cCidade: "São Paulo - SP"
},
{
    cId: "1",
    cNome: "Yuri",
    cEndereço: "Avenida Teste, 20",
    cCidade: "Osasco - SP"
},
{
    cId: "2",
    cNome: "Bethania",
    cEndereço: "Estrada Teste, 30",
    cCidade: "Rio de Janeiro - RJ"
}];


app.get('/clientes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cliente[index]);
});

app.get('/clientes', (req, res) => {
    return res.json(cliente);
});

app.post('/clientes', (req, res) => {
    cId++;
    const { cNome } = req.body;
    const { cEndereço } = req.body;
    const { cCidade } = req.body;

    cliente[cId] = { cId: cId, cNome, cEndereço, cCidade };

    return res.json(cliente[cId]);
});

app.put('/clientes/:index', (req, res) => {
    const { index } = req.params;
    const { cId } = req.body;
    const { cNome } = req.body;
    const { cEndereço } = req.body;
    const { cCidade } = req.body;

    cliente[index] = { cId, cNome, cEndereço, cCidade };
    return res.json(cliente);
});

app.delete('/clientes/:index', (req, res) => {
    const { index } = req.params;

    cliente.splice(index, 1);
    return res.json({ messege: "Cliente excluído." });
});

app.listen(4200, () => {
    console.log('Servidor rodando na porta 4200')
});