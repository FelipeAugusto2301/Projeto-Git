const express = require('express');

const app = express();

// middleware integrado
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// middleware de app
app.use(function(req, res, next) {
    console.log("Data/Hora", new Date());
    next();
})

// middleware de rota
app.get('/', function(req, res){
    res.send(200).end()
});

app.post('/', function(req, res) {
    console.log(req.body);
    res.status(204).end()
})

app.put('/', function(req, res) {
   res.status(204).end();
});

app.delete('/', (req, res) => {
    throw new Exception('erro');
})

// middleware de tratamento de erro
app.use(function(error, req, res, next) {
    res.status(400).send({message: "Deu ruim"});
})

app.listen(3000, function() {
    console.log("API está ON!");
});
module.exports = app;