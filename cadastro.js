const express = require('express')
const app = express();


app.get('/cadastrar', function(req, res){
    res.sendFile(__dirname + "/index.html")    
});

app.post("/dados", function (req, res){
    let nome = req.params.nome
    let endereco = req.params.endereco
    let telefone = req.params.telefone
    let data = req.params.data

    res.send(`seu nome é ${nome}, seu endereço é ${endereco}, seu telefone é ${telefone} e a data é ${data}`)
});

const PORT = 8080;
app.listen(PORT, function() {
    console.log('listening on', PORT);
});