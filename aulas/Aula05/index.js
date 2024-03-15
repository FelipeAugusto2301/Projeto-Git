const express = require ('express');
const routerProdutos = require("./router")

const app = express();

app.use(routerprodutos);

app.listen(3000),function(){

};

module.exports = app;
