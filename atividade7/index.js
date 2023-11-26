const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()

app.engine('html', mustacheExpress());
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.use(express.urlencoded())

app.get('/', function (req, res) {
    res.render('index.html');
})

app.post('/dados', function(req, res) {
    let dados_pessoais = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        data_nascimento: req.body.data_nascimento, 
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        estado: req.body.estado,
        uf: req.body.uf,
        cep: req.body.cep, 
        email: req.body.email, 
        telefone: req.body.telefone
    }
    
    let dados_consulta = {
        especialidade: req.body.especialidade,
        data_hora: req.body.data_hora,
        antibiotico:req.body.antibiotico,
        antinflamatorio: req.body.antiinflamatorios,
        antibiotico: req.body.antibiotico,
        informacoes_adicionais: req.body.informacoes_adicionais
    }

    let erros = []

    for (dado in dados_consulta) {
        if (dado == "") {
            erros.push(dado)
        }
    }


    res.render('dados.html', {dados_pessoais, dados_consulta, erros})
})


const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta: " + PORT)
})
