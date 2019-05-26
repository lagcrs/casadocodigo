//ARQUIVO DE CONFIGURAÇÃO DO EXPRESS

//habilitando biblioteca marko na aplicação
require('marko/node-require').install();
require('marko/express');

const express = require('express');

const app = express()

const rotas = require('../app/rotas/rotas.js');

const bodyParser = require('body-parser');

const methodOverride = require('method-override')

//ativar middlewares para arquivos estáticos
app.use('/estatico', express.static('src/app/public'))


app.use(bodyParser.urlencoded({
    extended: true
}));

//verificando se o corpo da requisição é do tipo object e se exixte um _method
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
  }))

//passando para rotas como paramentro o objeto app
rotas(app);

//exportando objeto app
module.exports = app;