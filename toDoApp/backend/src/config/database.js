const mongoose = require('mongoose')
//Irá utilizar a API de promisses do node
mongoose.Promise = global.Promise
//Passar nome do banco
module.exports = mongoose.connect('mongodb://localhost/todo')