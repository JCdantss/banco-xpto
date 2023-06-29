var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Cliente = require('./cliente');
const ClienteService = require('./cliente-service');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.post('/Cliente', (req, res) => {
    let cliente = new Cliente(req.body.nome, req.body.cpf, req.body.dataDeCadastro)
    res.json(cliente)
})
module.exports = app;
