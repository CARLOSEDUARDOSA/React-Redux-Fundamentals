const express = require('express')

//function que recebe um parametro
module.exports = function(server){

    //API Routes
    //rota base 
    const router = express.Router()
    server.use('/api', router)

    // Todo Routes
    const todoService =require('../api/todo/todoService')
    //disponibiliza todos os metodos informados para serem usado em /api/todos
    todoService.register(router, '/todos')
}