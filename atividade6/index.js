const express = require('express');
const mustacheExpress = require("mustache-express")
const bodyParser = require('body-parser'); // Importe o body-parser
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // Configure o body-parser
app.use(bodyParser.json()); // Configure o body-parser
bodyParser.urlencoded
app.use(express.urlencoded({extended: true}))

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', __dirname)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post("/dados", (req, res) =>{
    let agendamento = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        dataNascimento: req.body.dataNascimento
    }

    let erro_form = agendamento.nome == "" || agendamento.endereco == "" || agendamento.telefone == "" || agendamento.data_agendamento == ""


    res.render("dados.html", {agendamento, erro_form})
});

const port = 8080; 
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

